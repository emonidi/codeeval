var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       var perms = [];
       permutate(line.split(''),0,line.length)
       function permutate(word,startIndex, length){
          if(startIndex === length-1){
            return;
          }else{
             for(var i = 0; i < length; i++){
                var w = swap(word,i,length-1).join('');
                if(perms.indexOf(w) === -1){
                  perms.push(w);
                }
                
                permutate(word,startIndex+1,length)
             }
          }
       }

       console.log(perms.sort(function(a,b,index){
          return a > b;
       }).join(','));

       function swap(word,fIndex, sIndex){
          var temp = word[fIndex];
          word[fIndex] = word[sIndex];
          word[sIndex] = temp;
          return word;
       }
    }
});