var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	
	function fibonacci(index){

		var arr = [0,1];//[1,2]
		if(index < 2){
			return arr[index]
		}
		currIndex = 1;//2
		while(currIndex <= index-1){
			currIndex++;
		   	arr.push(arr[currIndex-1]+arr[currIndex-2])
		}
		return arr.pop();
	}
	
    if (line != "") {
    	console.log(fibonacci(parseInt(line)));
    }

});