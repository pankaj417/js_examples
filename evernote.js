/*
 * The following code is a preliminary implementation of a "note search
 * service", which is a microservice that exposes a `findNotes` API to search
 * for notes in a user's account. The code is in a "work in progress" state,
 * with many unimplemented features and systems. We are essentially porting
 * over `NoteStore.findNotes` from Evernote's monolithic server to a new
 * microservice, powered by this code.
 *
 * Your task is to run the unit tests, identify the failing code, and make
 * changes to the service so that the unit tests pass. You can assume that all
 * of the unit test code is working - all of the bugs and unimplemented features
 * exist in the service code and not in the unit tests.
 *
 * Please feel free to make liberal use of search engines, language
 * documentation, Stack Overflow, or any other resource that you'd like to make
 * progress. You are not expected to be familiar with all of the language
 * constructs or libraries used.
 */

const assert = require("assert");
const Mocha = require("mocha");
const uuid = require("uuid/v4");

const mocha = new Mocha({ ui: "bdd" });

/**
 * A container of any number of notes. Each notebook belongs to a single user,
 * and may only contain notes that belong to that user. A note must belong to a
 * single notebook.
 */
class Notebook {
  constructor(guid, name) {
    /**
     * A globally unique ID representing this notebook. It is assumed that each
     * GUID is unique across all objects in all users' accounts.
     */
    this.guid = guid; // string
    /**
     * The name of the notebook. This is the human-readable name by which a user
     * would identify a notebook.
     */
    this.name = name; // string

    /* This class is missing many notebook fields from real Evernote notebooks,
     * but none of them are necessary for this exercise. */
  }
}

/**
 * An object that serves as the main unit of data for an Evernote user. All
 * content that users add to Evernote must live in a Note.
 */
class Note {
  constructor(guid, notebookGuid, title) {
    /**
     * A globally unique ID representing this note.
     */
    this.guid = guid; // string
    /**
     * A GUID of a notebook in this user's account.
     */
    this.notebookGuid = notebookGuid; // string
    /**
     * The title of the note. This is the human-readable name by which a user
     * would identify a note.
     */
    this.title = title; // string

    /* Note that content has not yet been implemented - it is not necessary for
     * this exercise, but a complete Note object would have a string content
     * field that holds ENML (similar to HTML). */
  }
}

/**
 * A filter that describes what sort of notes to return when
 * NoteSearchService.findNotes() is called.
 */
class NoteFilter {
  constructor() {
    /**
     * A list of strings that must all be present in a note for it to be
     * returned. For example, a note with a title of "Game of Thrones" would be
     * returned for a list of ["Game"], but would not be returned for a list of
     * ["Game", "soccer"]. If null, then this filter is ignored, and notes are
     * returned regardless of their title.
     */
    this.titleWords = null; // string[]
    /**
     * The name of the notebook to which the returned notes must belong. For
     * example, a note inside a notebook with a name of "England" would be
     * returned if this value was set to "England", but a note inside a notebook
     * of name "France" would not be returned. If null, then this filter is
     * ignored, and notes are returned regardless of their notebook.
     */
    this.notebookName = null; // string
  }
}

/**
 * The persistence layer for notebooks. Data stored here is persisted in between
 * service restarts.
 *
 * This should be implemented with a database. This early version of the
 * microservice does not yet have a database provisioned to it, so we use maps
 * instead.
 */
class PersistentNotebooks {
  constructor() {
    /** A map of user IDs to maps of GUIDs to notebooks. */
    this._notebooks = new Map();
  }

  /**
   * Gets all notebooks in a user's account.
   */
  listNotebooks(userId) {
    const notebooksForUser = this._notebooks.get(userId);
    return notebooksForUser ? [...notebooksForUser.values()] : [];
  }

  /**
   * Gets a single notebooks from a user's account for the provided GUID.
   */
  getNotebook(userId, notebookGuid) {
    const notebookssForUser = this._notebooks.get(userId);
    return notebooksForUser ? notebooksForUser.get(s) : null;
  }
  
  /**
   * Creates and persists a notebook for the provided user.
   */
  createNotebook(userId, name) {
    let notebooksForUser = this._notebooks.get(userId);
    if (!notebooksForUser) {
      notebooksForUser = new Map();
      this._notebooks.set(userId, notebooksForUser);
    }
    const guid = uuid();
    const notebook = new Notebook(guid, name);
    notebooksForUser.set(guid, notebook);
    return notebook;
  }
}

/**
 * The persistence layer for notes.
 *
 * Like PersistentNotebooks, this should be replaced in part with a database.
 */
class PersistentNotes {
  constructor() {
    /** A map of user IDs to maps of GUIDs to notes. */
    this._notes = new Map();
  }

  /**
   * Gets all notes in a user's account.
   */
  listNotes(userId) {
    const notesForUser = this._notes.get(userId);
    return notesForUser ? [...notesForUser.values()] : [];
  }

  /**
   * Creates and persists a note for the provided user.
   */
  createNote(userId, notebookGuid, title) {
    let notesForUser = this._notes.get(userId);
    if (!notesForUser) {
      notesForUser = new Map();
      this._notes.set(userId, notesForUser);
    }
    const guid = uuid();
    const note = new Note(guid, notebookGuid, title);
    notesForUser.set(guid, note);
    return note;
  }
}

/**
 * A service that exposes an API to search notes in a user's account.
 */
class NoteSearchService {
  constructor() {
    this._persistentNotebooks = new PersistentNotebooks();
    this._persistentNotes = new PersistentNotes();
  }

  /**
   * Finds notes in a user's account, filtered by the provided filter.
   */
  findNotes(userId, filter) {
    console.log('userId', userId)
    console.log('filter', filter)
    return this._persistentNotes.listNotes(userId).filter(note => {
      
      if (filter.notebookName) {
        console.log('note',note)
        console.log('name', this._persistentNotebooks.getNotebook(userId, note.notebookGuid))
        const notebookObj = this._persistentNotebooks.getNotebook(userId, note.notebookGuid)
        return notebookObj.name === filter.notebookName ?  note : false
      }

      return true;
    });
  }
}

// Plumbing to make unit tests work in CoderPad.
mocha.suite.emit("pre-require", this, "solution", mocha);

describe("findNotes", function() {
  it.skip("should return empty array for known user with no notes", function() {
    const service = new NoteSearchService();
    service._persistentNotebooks.createNotebook(1, "alpha");
    assert(service.findNotes(1, new NoteFilter()).length === 0);
  });

  it.skip("should match title words", function() {
    const service = new NoteSearchService();
    const notebookGuid = service._persistentNotebooks.createNotebook(
      1,
      "Work notes"
    ).guid;
    service._persistentNotes.createNote(
      1,
      notebookGuid,
      "Evernote architecture diagram"
    );
    service._persistentNotes.createNote(
      1,
      notebookGuid,
      "Microservice architecture ideas"
    );

    const filter = new NoteFilter();
    filter.titleWords = ["diagram", "architecture"];
    const actualNotes = service.findNotes(1, filter);
    assert(actualNotes.length === 1);
    assert(actualNotes[0].title === "Evernote architecture diagram");
  });

  it("should match notebook name", function() {
    const service = new NoteSearchService();
    const recipesNotebookGuid = service._persistentNotebooks.createNotebook(
      1,
      "Recipes"
    ).guid;
    const schoolNotebookGuid = service._persistentNotebooks.createNotebook(
      1,
      "School notes"
    ).guid;
    service._persistentNotes.createNote(1, recipesNotebookGuid, "Apple pie");
    service._persistentNotes.createNote(
      1,
      schoolNotebookGuid,
      "Networking: TCP"
    );

    const filter = new NoteFilter();
    filter.notebookName = "School notes";
    const actualNotes = service.findNotes(1, filter);
    assert(actualNotes.length === 1);
    assert(actualNotes[0].title === "Networking: TCP");
  });
});

mocha.run(function() {});