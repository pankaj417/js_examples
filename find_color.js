'use strict'

var colors = ["aliceblue","antiquewhite","aqua","aquamarine","azure",
                "beige","bisque","black","blanchedalmond","blue","blueviolet",
                "brown","burlywood","cadetblue","chartreuse","chocolate","coral",
                "cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan",
                "darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta",
                "darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen",
                "darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet",
                "deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite",
                "forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green",
                "greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki",
                "lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral",
                "lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink",
                "lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey",
                "lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon",
                "mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen",
                "mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred",
                "midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy",
                "oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod",
                "palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru",
                "pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown",
                "salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue",
                "slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato",
                "turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen", "yyy", "yyyttt",
                "tyyytt", "tyyy","yyt"]

function findColorOld(colorString) {
  var stringArray = colorString.split('');
  var returnArray = []
  for(var j=0; j<colors.length; j++) {
    var colorArray = colors[j].split('');
    var lastKey = 0; 
    var currentKey = 0;
    for(var i=0; i<stringArray.length; i++) {
      lastKey = currentKey;
      currentKey = colorArray.indexOf(stringArray[i], lastKey);
      if(currentKey>=lastKey) {
        continue;
      } else {
        break;
      }
    }
    if(currentKey > lastKey)  {
      returnArray.push(colors[j])
    }
  }
  return returnArray;
}


console.log(findColorOld('uqi'))
// [ 'darkturquoise', 'mediumaquamarine', 'mediumturquoise', 'paleturquoise', 'turquoise' ]

console.log(findColorOld('zre'))
// [ 'azure' ]

console.log(findColorOld('gold'))
// [ 'darkgoldenrod', 'gold', 'goldenrod', 'lightgoldenrodyellow', 'palegoldenrod' ]


// implement findColor Function
function findColor(colorString) {
	var colorStringArray = colorString.split('');
	var colorStringArrayLength = colorStringArray.length;
	var matchedColorArray = [];
	for (var i=0; i<colors.length; i++) {
		var matchedKey = -1;
		for (var j=0; j<colorStringArrayLength; j++) { 
			matchedKey = colors[i].indexOf(colorStringArray[j], matchedKey+1);
			if(matchedKey < 0) {
				break;
      }
    }
		if(matchedKey >-1 )
	    matchedColorArray.push(colors[i])	
    }
	return matchedColorArray;
}


console.log(findColor('uqi'))
// [ 'darkturquoise', 'mediumaquamarine', 'mediumturquoise', 'paleturquoise', 'turquoise' ]

console.log(findColor('zre'))
// [ 'azure' ]

console.log(findColor('gold'))
// [ 'darkgoldenrod', 'gold', 'goldenrod', 'lightgoldenrodyellow', 'palegoldenrod' ]

console.log(findColor('yyy'))
console.log(findColor(''))
