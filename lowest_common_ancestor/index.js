
var tree = {
	30:{
		8:{
			3:{},
			20:{
				10:{},
				29:{}
			}
		},
		52:{
            14:{
                39:{
                    5:{
                        18:{},
                        93:{}
                    }
                },
                12:{
                    16:{
                        78:{},
                        43:{
                            15:{}
                        }
                    }
                }
            }
        }
	}
};

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	var split = ['15','29']//line.split(' ');
        var arr = [];

        traverseDown(tree)
        console.log(arr)

        function traverseDown(obj){
        	for(var i in obj){	
                arr.push(i);
                traverseDown(obj[i]);
        	}
        }

    }
});