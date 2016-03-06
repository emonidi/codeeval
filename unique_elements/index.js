var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var arr = line.split(',').filter(function(val,index,array){
        	return val !== array[index+1];
        });
        console.log(arr.join(','));
    }
});