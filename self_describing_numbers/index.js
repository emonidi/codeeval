//https://www.codeeval.com/open_challenges/40/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== ''){
      var isSelfDesc;
      var arr = line
         .replace('\r','')
         .split('')
         .map(function(item){
           return parseInt(item);
         });


      arr.forEach(function(item, index, arr){
          isSelfDesc = isSelfDesc === 0 ? 0 : (checkDesc(item, index, arr) === true ? 1 :1);
      });


      function checkDesc(number, position,arr){
          var neededOccurances = number,
          numberToLookFor = position,
          actualOccurances = 0;

          arr.forEach(function(item, index){
             if(item === numberToLookFor){
               actualOccurances += 1;
          })

          return actualOccurances === neededOccurances;
      }
      console.log(isSelfDesc);
    }
});
