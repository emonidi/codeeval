//https://www.codeeval.com/open_challenges/78/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  'use strict';
    if (line != "") {
       let wordArr = line.replace('\r','').split(" ");
      let sentence =  wordArr.map((item, index, arr)=>{
          item = swapNumbers(item);
          return item;
       }).join(' ');

       console.log(sentence);
    }
});

function swapNumbers(word){
  'use strict'
  let newWord = word;
  let arr = word.split('');
  let numbers = [];
  arr.forEach((item, index) => {
      if(!isNaN(parseInt(item))){
        numbers.push(item);
        newWord = newWord.replace(item,'')
      };
  })

  return numbers[1] + newWord + numbers[0];
}
