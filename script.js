$(document).ready(function() { 

	$('.enter').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	})

	$('#exp').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9\.\-\+\x\y\^\*\%\/\(\)]/g)) {
			this.value = this.value.replace(/[^0-9\.\-\+\x\y\^\*\%\/\(\)]/g, '');
		}
	})


	$("#ok").click( function () { 
		var x = $("input[name=x]").val();
		var y = $("input[name=y]").val();
		var exp = $("input[name=exp]").val();

		var chars = exp.split('');

		var resultTest=true;
		var str='';
		var error='';

		function validate() {
		  for (var i = 0; i <= chars.length - 1; i++) {
			switch(chars[i]) {
				case 'x':
					if (chars[i+1]=='x'||chars[i+1]=='y'||chars[i+1]=="0"||
						chars[i+1]=="0"||chars[i+1]=="1"||chars[i+1]=="2"||
						chars[i+1]=="3"||chars[i+1]=="4"||chars[i+1]=="5"||
						chars[i+1]=="6"||chars[i+1]=="7"||chars[i+1]=="8"||
						chars[i+1]=="9" ) {
					resultTest=false;
					error+="Два числа или переменные не разделенные знаком операции!\n";
					} else
					str+=chars[i]; 
					break;
				case 'y':
					if (chars[i+1]=='x'||chars[i+1]=='y'||chars[i+1]=="0"||
						chars[i+1]=="0"||chars[i+1]=="1"||chars[i+1]=="2"||
						chars[i+1]=="3"||chars[i+1]=="4"||chars[i+1]=="5"||
						chars[i+1]=="6"||chars[i+1]=="7"||chars[i+1]=="8"||
						chars[i+1]=="9" ) {
					resultTest=false;
					error+="Два числа или переменные не разделенные знаком операции!\n";
					} else 
					str+=chars[i];
					break;
				case '1':
					if (chars[i+1]=='x'||chars[i+1]=='y'){
					resultTest=false;
					error+="Число и переменная без разделяющего знака операции!\n";
					} else 
					str+=chars[i];
					break;
				case '2':
					if (chars[i+1]=='x'||chars[i+1]=='y'){
					resultTest=false;
					error+="Число и переменная без разделяющего знака операции!\n";
					} else 
					str+=chars[i];
					break;
				case '3':
					if (chars[i+1]=='x'||chars[i+1]=='y'){
					resultTest=false;
					error+="Число и переменная без разделяющего знака операции!\n";
					} else 
					str+=chars[i];
					break;
				case '4':
					if (chars[i+1]=='x'||chars[i+1]=='y'){
					resultTest=false;
					error+="Число и переменная без разделяющего знака операции!\n";
					} else 
					str+=chars[i];
					break;
				case '5':
					if (chars[i+1]=='x'||chars[i+1]=='y'){
					resultTest=false;
					error+="Число и переменная без разделяющего знака операции!\n";
					} else 
					str+=chars[i];
					break;
				case '6':
					if (chars[i+1]=='x'||chars[i+1]=='y'){
					resultTest=false;
					error+="Число и переменная без разделяющего знака операции!\n";
					} else 
					str+=chars[i];
					break;
				case '7':
					if (chars[i+1]=='x'||chars[i+1]=='y'){
					resultTest=false;
					error+="Число и переменная без разделяющего знака операции!\n";
					} else 
					str+=chars[i];
					break;
				case '8':
					if (chars[i+1]=='x'||chars[i+1]=='y'){
					resultTest=false;
					error+="Число и переменная без разделяющего знака операции!\n";
					} else 
					str+=chars[i];
					break;
				case '9':
					if (chars[i+1]=='x'||chars[i+1]=='y'){
					resultTest=false;
					error+="Число и переменная без разделяющего знака операции!\n";
					} else 
					str+=chars[i];
					break;
				case '0':
					if (chars[i+1]=='x'||chars[i+1]=='y'||chars[i+1]=="0"||
						chars[i+1]=="0"||chars[i+1]=="1"||chars[i+1]=="2"||
						chars[i+1]=="3"||chars[i+1]=="4"||chars[i+1]=="5"||
						chars[i+1]=="6"||chars[i+1]=="7"||chars[i+1]=="8"||
						chars[i+1]=="9" ) {
					resultTest=false;
					error+="Число после 0 без разделяющего знака операции!\n";
					} else 
					str+=chars[i];
					break;
				case '+':
					if (chars[i+1]=='-'||chars[i+1]=='+'||chars[i+1]=='/'||
						chars[i+1]=='^'||chars[i+1]=='*'||chars[i+1]=='%') {
					resultTest=false;
					error+="Два знака операции подряд!\n";
					} else 
					str+=chars[i];
					break;
				case '-':
					if (chars[i+1]=='-'||chars[i+1]=='+'||chars[i+1]=='/'||
						chars[i+1]=='^'||chars[i+1]=='*'||chars[i+1]=='%') {
					resultTest=false;
					error+="Два знака операции подряд!\n";
					} else 
					str+=chars[i];
					break;
				case '*':
					if (chars[i+1]=='-'||chars[i+1]=='+'||chars[i+1]=='/'||
						chars[i+1]=='^'||chars[i+1]=='*'||chars[i+1]=='%') {
					resultTest=false;
					error+="Два знака операции подряд!\n";
					} else 
					str+=chars[i];
					break;
				case '%':
					if (chars[i+1]=='-'||chars[i+1]=='+'||chars[i+1]=='/'||
						chars[i+1]=='^'||chars[i+1]=='*'||chars[i+1]=='%') {
					resultTest=false;
					error+="Два знака операции подряд!\n";
					} else if (chars[i+1]=='0'||chars[i+1]=='x' && x == '0'||
						chars[i+1]=='y' && y == 0) {
						resultTest=false;
						error+="Делить на ноль нельзя!\n";
					} else
						str+=chars[i];
						break;
				case '^':
					if (chars[i+1]=='-'||chars[i+1]=='+'||chars[i+1]=='/'||
						chars[i+1]=='^'||chars[i+1]=='*'||chars[i+1]=='%') {
					resultTest=false;
					error+="Два знака операции подряд!\n";
					} else 
					str+=chars[i];
					break;
				case '/':
					if (chars[i+1]=='-'||chars[i+1]=='+'||chars[i+1]=='/'||
						chars[i+1]=='^'||chars[i+1]=='*'||chars[i+1]=='%') {
					resultTest=false;
					error+="Два знака операции подряд!\n";
					} else if (chars[i+1]=='0'||chars[i+1]=='x' && x == '0'||
						chars[i+1]=='y' && y == 0) {
						resultTest=false;
						error+="Делить на ноль нельзя!\n";
					} else
						str+=chars[i];
						break;
				case '(':
					if (chars[i+1]=='-'||chars[i+1]=='+'||chars[i+1]=='/'||
						chars[i+1]=='^'||chars[i+1]=='*'||chars[i+1]=='%') {
					resultTest=false;
					error+="Открывающий знак после скобки!\n";
					} else 
					str+=chars[i];
					break;
				case ')':
					if (chars[i-1]=='-'||chars[i-1]=='+'||chars[i-1]=='/'||
						chars[i-1]=='^'||chars[i-1]=='*'||chars[i-1]=='%') {
					resultTest=false;
					error+="Перед закрывающей скобкой знак операции!\n";
					} else if (chars[i+1]=='(' || chars[i-1]=='(') {
					resultTest=false;
					error+="Ты еще поиздевайся надо мной! => скобки не мучай! \n";
					} else
					str+=chars[i];
					break;
			}
		  }
	    }

	    validate();

	    if (resultTest==false) {
			alert(error); 
		} else {
			var formData = {
                x: $("input[name=x]").val(),
                y: $("input[name=y]").val(),
                exp: str,
            };

		 	$.ajax({
			 	url: './calc.php',
			 	type: 'POST',
			 	data: formData,
	  		 	success: function(data) {

	  			 	console.log(data);
	  			 	$('.hide').show();
	    		 	$('#result').html(data);
					$('#result').val(data);
			 	}
			});
		}	
	});
});