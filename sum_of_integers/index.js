//https://www.codeeval.com/open_challenges/17/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict'
    if (line !== ''){
        let subArr = [];
        let arr = line
          .replace('\r','')
          .split(',')
          .map(function(item){
              return parseInt(item);
          })


        arr.forEach((item, index,arr)=>{
            let initalArray = arr.slice(index, arr.length);
            subArr.push(initalArray);
            for(var i = index+1; i <= initalArray.length+1; i++){
               subArr.push(arr.slice(index,i));
            }
        })


        subArr = subArr.filter((item, index)=>{
          if(item.length > 0){
            return item;
          }
        }).map((item, index)=>{
            return item.reduce((prev, curr)=>{
              return prev+curr;
            })
        }).sort((a, b)=>{
          return a - b
        }).reverse();

        console.log(subArr[0])
    }
});
