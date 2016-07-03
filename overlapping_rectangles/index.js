/**
 * Created by emonidi on 6/30/16.
 */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var overlapping = false;
        line  = line.replace('\r','').split(',')
            .map(function(item){
                return parseInt(item);
            })
                    // -3       3        -1      1
            var a = [line[0], line[1], line[2], line[3]];
                    // -2       4         2       2
            var b = [line[4], line[5], line[6], line[7]];


        overlapping = isInRange(b[0], a[0], a[2])
                    || isInRange(b[1], a[1], a[3])
                    || isInRange(b[2], a[0], a[2])
                    || isInRange(b[3], a[1], a[3]);

        console.log(overlapping ? 'True' : 'False')
    }
});

function isInRange(number, start, end){
    return (start <= number && number <= end) || (start >= number && number  >= end);
}