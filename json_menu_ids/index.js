//https://www.codeeval.com/open_challenges/102/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var line = JSON.parse(line.replace('\r', ''));

        var SUM = traverse(line.menu.items);

        function traverse(branch){
            var sum = 0;
            Object.keys(branch)
              .forEach(function(item, index){
                  if(branch[item]){
                     if(branch[item].label && branch[item].id){
                          sum += branch[item].id;
                     }
                     if(branch[item].items){
                        sum += traverse(branch[item].items);
                     }
                  }
              })

              return sum;
        }

        console.log(SUM);
    }
});
