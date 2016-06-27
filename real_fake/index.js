var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
   		 var ret = line
          .replace('\r','')
          .split(' ').join('')
          .split('')
          .map((item, index)=>{
             var num = parseInt(item);
             if(index === 0 || index % 2 === 0){
               return num*2;
             }
             return num;
          })
          .reduce((prev, curr) =>{
            return prev+curr;
          })


          console.log(ret % 10 === 0 ? 'Real' : 'Fake');
    }
});
