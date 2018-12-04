   var common = findMostCommon(input);

     var input = [
     "Lee, John",
     "Kong, Nancy",
     "Rodriguez, Sarah",
     "Kong, Bill",
     "Kong, Jessica",
     "Lee, Sarah"
    ];
 
 
   var common = findMostCommon(input);function findMostCommon(input) {
     var output = {};
     var mapper = {surname: {}, name: {}};
     var maxSurNameCount = 0;
     var maxSurName = '';
     var maxNameCount = 0;
     var maxName = '';
     for(var i = 0; i <input.length; i++){
        var nameList = input[i].split(',');
        var firstName= nameList[1];
        var lastName= nameList[0];
        if(mapper.name[firstName]) {
        	mapper.name[firstName]+=1
        } else {
       		mapper.name[firstName]=1
        }
        if(mapper.surname[lastName]) {
        	mapper.surname[lastName]+=1
        } else {
       		mapper.surname[lastName]=1
        }
        if(mapper.name[firstName]>maxNameCount) {
        	maxNameCount = mapper.name[firstName];
        	maxName = firstName;
        }
        if(mapper.surname[lastName]>maxSurNameCount) {
        	maxSurNameCount = mapper.surname[lastName];
        	maxSurName = lastName;
        }  
     }
     return	{
       'surname': {
           'name': maxSurName,
           'count': maxSurNameCount
       },
       'firstname': {
            'name': maxName,
            'count': maxNameCount
       }
      }
 }
var common = findMostCommon(input);
console.log(common)