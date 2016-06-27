//https://www.codeeval.com/open_challenges/78/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  'use strict';
    if (line != "") {
       var layoutArray = [];
       var factor = parseInt(line.split(';')[0]);

       var layout = line.replace('\r','').split(';')[1].split(',').map((item)=>{
         return parseInt(item);
       });
       var lastIndex = 0;
       layout.forEach((item,index, arr)=>{
           if(index !== 0 && index % factor === 0){
              let slice = arr.slice(lastIndex,index);
              layoutArray.push(slice);
              lastIndex = index;
           }
       });

       layoutArray.push(layout.slice(lastIndex,layout.length))



       let correctMap = layoutArray.map(function(item){
           let isCorrect = true;
           if(item.length < factor){
             return false;
           }
           item.forEach((quad, index)=>{
             if(item.indexOf(index+1) === -1){
                isCorrect = false;
             }
           });
           return isCorrect;
       }).filter((item)=>{
          if(item){
            return item;
          }
       })

       console.log(correctMap.length === factor ? "True" : "False");
    }
});
