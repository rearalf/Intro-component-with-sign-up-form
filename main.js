const button = document.querySelector('#button');

button.addEventListener('click', e => {
	e.preventDefault();
	const name = document.querySelector('#name');
	const errorName = document.querySelector('#errorName');
	const lastName = document.querySelector('#lastName');
	const errorLast = document.querySelector('#errorLast');
	const email = document.querySelector('#email');
	const errorEmail = document.querySelector('#errorEmail');
	const password = document.querySelector('#password');
	const errorPassword = document.querySelector('#errorPassword');

	if (!name.value) {
		name.classList.add('icon-error');
		errorName.classList.add('error');
	}
	else {
		name.classList.remove('icon-error');
		errorName.classList.remove('error');
	}
	if (!lastName.value) {
		lastName.classList.add('icon-error');
		errorLast.classList.add('error');
	}
	else {
		lastName.classList.remove('icon-error');
		errorLast.classList.remove('error');
	}
	if (!email.value) {
		email.classList.add('icon-error');
		errorEmail.classList.add('error');
	}
	else {
		if (validarEmail(email.value)) {
			email.classList.remove('icon-error');
			errorEmail.classList.remove('error');
		}
		else {
			email.classList.add('icon-error');
			errorEmail.classList.add('error');
		}
	}
	if (!password.value) {
		password.classList.add('icon-error');
		errorPassword.classList.add('error');
	}
	else {
		password.classList.remove('icon-error');
		errorPassword.classList.remove('error');
	}
});

function validarEmail(valor){
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(valor)) {
		return true;
	}
	else {
		return false;
	}
}
