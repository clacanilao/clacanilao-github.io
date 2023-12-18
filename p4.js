/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
	// Hides all error elements on the page
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}


	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;
	


}
 
/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('Clear order?')) {
		// Ensure all error fields are hidden
		hideErrors();

		// Set focus to the first text field on the page
		document.getElementById("name").select();

        let nameFrame = document.getElementById("name");
        let phoneNumberFrame = document.getElementById("PhoneNumber");
        let emailFrame = document.getElementById("Email");
        let name = document.getElementById("name");
        let phoneNumber = document.getElementById("phonenumber");
        let emailAddress = document.getElementById("email");

        nameFrame.removeAttribute("style", "background-image: radial-gradient(navy 20%, transparent 70%, rgb(117, 10, 10) 40%);");
        name.removeAttribute("style","background-color: red; color: white;");
        phoneNumberFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);"); 
        phoneNumber.removeAttribute("style","background-color: red; color: white;");
        emailFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
        emailAddress.removeAttribute("style","background-color: red; color: white;");

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {
    let errorFlag = false;
    let nameFrame = document.getElementById("Name");
    let phoneNumberFrame = document.getElementById("PhoneNumber");
    let emailFrame = document.getElementById("Email");
    let name = document.getElementById("name");
    let phoneNumberValue = document.getElementById("phonenumber").value;
    let phoneNumber = document.getElementById("phonenumber");
    let regexEmail = new RegExp(/(\s+)?^[ \w-\.]+@([\w-]+\.)+[\w- ]{2,4}(\s+)?$/);
	let emailAddressValue = document.getElementById("email").value;
    let emailAddress = document.getElementById("email");

	if(!formFieldHasInput(name)){
		document.getElementById("name_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("name").select();
            nameFrame.setAttribute("style", "background-image: radial-gradient(navy 20%, transparent 70%, rgb(117, 10, 10) 40%);");
            name.setAttribute("style","background-color: red; color: white;");

            phoneNumberFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);"); 
            phoneNumber.removeAttribute("style","background-color: red; color: white;");
            emailFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            emailAddress.removeAttribute("style","background-color: red; color: white;");

		}

		errorFlag = true;
	}



    if(phoneNumberValue.length == 0){
        document.getElementById("phonenumber_error").style.display = "block";

        if (!errorFlag){
			document.getElementById("phonenumber").select();
            phoneNumberFrame.setAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            phoneNumber.setAttribute("style","background-color: red; color: white;");

            nameFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            name.removeAttribute("style","background-color: red; color: white;");
            emailFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            emailAddress.removeAttribute("style","background-color: red; color: white;");
		}

		errorFlag = true;

    }

    if(phoneNumberValue.length > 0 && phoneNumberValue.length <= 9){
        document.getElementById("invalidphonenumber_error").style.display = "block";

        if (!errorFlag){
			document.getElementById("phonenumber").select();
            phoneNumberFrame.setAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            phoneNumber.setAttribute("style","background-color: red; color: white;");

            nameFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            name.removeAttribute("style","background-color: red; color: white;");
            emailFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            emailAddress.removeAttribute("style","background-color: red; color: white;");
		}

		errorFlag = true;
    }

	if(emailAddressValue.length == 0){
		document.getElementById("email_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("email").select();
            emailFrame.setAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            emailAddress.setAttribute("style","background-color: red; color: white;");

            phoneNumberFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            phoneNumber.removeAttribute("style","background-color: red; color: white;");
            nameFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            name.removeAttribute("style","background-color: red; color: white;");
		}

		errorFlag = true;
	}

    if(!regexEmail.test(emailAddressValue) && emailAddressValue.length > 0){
		document.getElementById("emailformat_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("email").select();
            emailFrame.setAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            emailAddress.setAttribute("style","background-color: red; color: white;");
			
            phoneNumberFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            phoneNumber.removeAttribute("style","background-color: red; color: white;");
            nameFrame.removeAttribute("style", "background-image: radial-gradient(navy 10%, transparent 70%, rgb(117, 10, 10) 40%);");
            name.removeAttribute("style","background-color: red; color: white;");
		}

		errorFlag = true;
	}

    return errorFlag;
}

/*
 * Hides all of the error elements.
 */
function hideErrors() {
	// Get an digitsay of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error digitsay
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Determines if a text field element has input
 *
 * param   fieldElement A text field input element object
 * return  True if the field contains input; False if nothing entered
 */
function formFieldHasInput(fieldElement) {
	// Check if the text field has a value
	if (fieldElement.value == null || trim(fieldElement.value) == "") {
		// Invalid entry
		return false;
	}

	// Valid entry
	return true;
}

/*
 * Removes white space from a string value.
 *
 * return  A string with leading and trailing white-space removed.
 */
function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

/*
 * Handles the load event of the document.
 */
function load() {

	// Add event listener for the form submit
	document.getElementById("contactform").addEventListener("submit", validate);

	// Reset the form using the default browser reset
	document.getElementById("contactform").reset();

	// Add event listener for our custom form submit function
	document.getElementById("contactform").addEventListener("reset", resetForm);

	hideErrors();

}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);