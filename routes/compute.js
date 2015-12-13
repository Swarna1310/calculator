var input1,input2,operator;
var numstack = [];
var oprstack = [];
var result;
exports.compute = function (req,res)
{
	var expression;
	var exprn ;
	expression = req.param("expr");
	console.log(expression);
	 if(expression.match(/[a-z]/i)) {
		 exprn="Invalid input!!!"; 
		 result="";
	}
	 else{
	//result = eval(expression);
	
		 exprn = expression;
	expression = expression.split(" ");
			input1 = parseInt(expression[0]);
			operator = expression[1];
			input2 =  parseInt(expression[2]);
	    console.log("num1:"+input1 +"op:" + operator+"num2:" + input2);
	   if(operator === '+')
		   {
		   result = input1 + input2;
		   }
	   if(operator === '-')
		   {
		   result = input1 - input2;
		   }
	   if(operator === '/')
		   {
		   result = input1 / input2;
		   }
	   if(operator === '*')
		   {
		   result = input1 * input2;
		   }
	   exprn = exprn + " = " +result ;
	 }  
		console.log("result"+result);  
		
		res.render('index', { title: 'Calculator',expr:result,inputtext:exprn });
		 
};		 
		 
		 
		 
