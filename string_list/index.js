var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
      var stringLength = parseInt(line.split(',')[0]);
      var inputString = line.split(',')[1].split('');
      var inputArr = [];
      var outputArr = [];
      
      
      
      console.log(outputArr.sort(function(a,b){
      	return a > b;
      }).join(','))
      
    }
});