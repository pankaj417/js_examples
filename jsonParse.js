

Please write a function that given a single datastructure input returns its JSON string representation. Please do not use any JSON encoders built into the language (json_encode(), json.dumps(), etc). 

 

Rules to encode JSON (http://json.org): there are 5 separate data types to consider.

 

Nulls: Undefined values for the language. These are encoded as plain strings, without quotes: null.

 

Strings: Need to have quotes added around them. For example, the string abc is encoded as "abc". (Note: you do not need to worry about escaping special characters for the purposes of this test)

 

Integers: Are just converted to strings. 1 (integer in datastructure) is encoded as 1 (JSON)

 

Arrays: Are translated into comma separated encoding of their contents, enclosed by brackets. For example, the encoding of array(1, "abc", 2) is [1,"abc",2]. 

 

Associative Arrays/Hashes: Are translated into comma separated key:value pairs enclosed by braces. For example, the encoding of array('key1' => 'val1', 'key2' => 'val2') (programming language) would be {"key1":"val1","key2":"val2"} (JSON). Note that the key of an associative array will always be a string. Sometimes the default test cases will fail because they assume the keys are in a certain order; this is fine as long as all keys are present and map to the correct values.

 

Note that arrays and hashes can contain other arrays and hashes: [1, 2, "def", [3,4], {"key": "val"}] is a legal JSON object.


Need to check how Http request works

 
