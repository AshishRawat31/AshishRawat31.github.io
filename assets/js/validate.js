function validateEmail(emailField){
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (reg.test(emailField.value) == false) 
	{
		alert('Invalid Email Address');
		return false;
	}
	return true;
}

function checkEmail() {
	var email = document.getElementById('Email');
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(email.value)) {
		alert('Please provide a valid email address');
		email.focus;
		return false;
	}
	postContactToGoogle();
}

function postContactToGoogle() {
	var email = $('#Email').val();
	var name = $('#Name').val();
	var message = $('#Message').val();
	$.ajax({
		url: "https://docs.google.com/forms/d/e/1FAIpQLSc4OjyWNZozxa6v4rEu7O9WNUE7MqnRRJ6gIiVSalorvKj0Kg/formResponse",
		data: { "entry.2005620554": name, "entry.1203005949": email, "entry.839337160": message},
		type: "POST", dataType: "xml",
		statusCode: {
			0: function () {
			window.location.replace("/regards");
			},
			200: function () {
				window.location.replace("/regards");
			}
		}
	});
}
