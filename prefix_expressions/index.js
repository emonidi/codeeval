var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       line = line.split(' ').reverse();
       var stack = [];
       line.forEach(function(el){
       	   if(!isOperator(el)){
       	   	 stack.push(parseInt(el));
       	   }else{
       	   	  var op1 = stack.pop();
       	   	  var op2= stack.pop();
       	   	  var newOp = calculate(op1, op2,el);
       	   	  stack.push(newOp)
       	   }
       });


       console.log(stack[0]);


       function isOperator(symbol){
       	 var operators = ['*','+','-','/']
		 return operators.indexOf(symbol) > -1;
       }

       function calculate(op1,op2,symbol){
       	  switch(symbol){
       	  	case '*':
       	  		return op1 * op2;
       	  		break;
       	  	case '/':
       	  		return op1 / op2;
       	  		break;
       	  	case '+':
       	  		return op1 + op2;
       	  		break;
       	  	case '-':
       	  		return op1 - op2;
       	  		break;
       	  }
       }
    }
});