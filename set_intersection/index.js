/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var split = line.split(';');
        var set_1 = split[0].split(',');
        var set_2 = split[1].split(',');

        var intersection = [];
        set_1.forEach(function(el, index){
        	if(set_2.indexOf(el) > -1){
        		intersection.push(set_2[set_2.indexOf(el)]);
        	}
        });

        console.log(intersection.join(','))
    }
});