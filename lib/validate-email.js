(function ($) {
	$.fn.emailValidator = function (email) {
		var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return validEmail.test(email)
	}
	
	$('#email').keyup(function(){
		let value = $(this).val()
		let validateEmail = $.fn.emailValidator(value)
		if(validateEmail){
			$('#email').addClass("success")
			$('p').text("Email address is valid.").css('color','green')
		}else{
			$('#email').addClass("error")
			$('p').text("Email address is not valid.").css('color','red')
		}
	})

})(jQuery)
