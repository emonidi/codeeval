var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {   	
    	var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

   		function columnName(string,index){
   			    var letterIndex = (index % 26);
	   			if(index > 0){
					string = letters[letterIndex === 0 ? 0 : letterIndex - 1] + columnName(string,Math.floor(index/26))
	   			}
	 			return string;
   		}

   		var colName = columnName('',parseInt(line));
   		console.log(colName.split('').reverse().join(''))
    }
});