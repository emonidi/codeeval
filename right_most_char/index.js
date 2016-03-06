var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
   		
   	    var occurance = -1,
   	    split = line.split(',')
   	    searchedChar = split[1],
   	    phrase = split[0];
   	   	phrase.split('').forEach(function(letter,index){
   	   		if(letter === searchedChar){
   	   			occurance = index;
   	   		}
   	   	});
   	   	console.log(occurance);
    }
});