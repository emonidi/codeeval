/**
 * Created by emonidi on 6/30/16.
 */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var alphabet = getAlphabet();
        line = line.toLowerCase();
        var missing = alphabet.filter(function(item, index){
            if(line.indexOf(item) ==  -1){
                return item;
            }
        });

        console.log(missing.length > 0 ? missing.join('') : "NULL");
    }
});


function getAlphabet(){
    var string = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    return string.split(',');
}
