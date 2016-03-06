var fs  = require("fs");

var Stack = function(){
	var storage = [];

	return {
		push:function(int){
			storage.push(int);
		},
		pop:function(){
			return storage.pop();
		},
		get:function(){
			return storage;
		},
		size:function(){
			return storage.length;
		}
	}
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	var outputArr = [];
    	var stack = new Stack();
     	var ints = line.split(' ');
     	ints.forEach(function(el){
     		stack.push(el);
     	});


     	var elCount = 0;
     	while(stack.size() > 0){
     	 	elCount++;
     	 	if(elCount % 2 == 1){
     	 		outputArr.push(stack.pop());
     	 	}else{
     	 		stack.pop();
     	 	}
     	}

     	console.log(outputArr.join(' '));
    }
});