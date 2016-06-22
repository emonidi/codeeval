//https://www.codeeval.com/open_challenges/12/submit/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
      var array = line.replace('\r','').split('');
      for(var i = 0; i<array.length; i++){
        if(array.lastIndexOf(array[i]) > i){
           line = line.replace(new RegExp(array[i],'ig'),"");
        }
      }
      console.log(line[0]);
    }
});
