//https://www.codeeval.com/open_challenges/10/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       var split = line.split(' ');
       var index = parseInt(split.pop());
	   split = split.reverse();
 	 	
 	   if(split[index-1]){
 	   	console.log(split[index-1]);
 	   }

 	   	
    }
});