/*Sample code to read in test cases: */
var fs  = require("fs");
var file = fs.readFileSync(process.argv[2]).toString().split('');
console.log(file.length)