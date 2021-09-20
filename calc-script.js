 const form = document.getElementById('calculator');
 form.addEventListener('submit', event => {
	 event.preventDefault();
 
	 const serialized = [];
 
	 for (var i = 0; i < form.elements.length; i++) {
 
		 var field = form.elements[i];
 
		 if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
 
		 if (field.type === 'select-multiple') {
			 for (var n = 0; n < field.options.length; n++) {
				 if (!field.options[n].selected) continue;
				 serialized.push(field.name) + "=" + (field.options[n].value);
			 }
		 } else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
			 serialized.push(field.value);
		 }
	 }
 
 
	 const numberOne = serialized[0];
	 const operator = serialized[1];
	 const numberTwo = serialized[2];
 
	 let result = eval(numberOne + operator + numberTwo);
 
	 document.getElementById("result").innerHTML = result;
 });