const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError")
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const validation = document.querySelector(".validationMessage");


form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    //sending firstname value // the lenght i will check with
    if(checkLen(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else{
        firstNameError.style.display = "block";
    }
    if(checkLen(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display ="block";
    }
    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";

    } else {
        emailError.innerHTML = `Please enter a valid email address.`;
        emailError.style.display = "block";
        if(email.value.length > 1) {
        const findError = findEmailError(email.value);
        emailError.innerHTML += `  ${findError}`;
        console.log(findError);
    }
        
    }
    if(checkLen(address.value, 24) === true) {
        addressError.style.display ="none";
    } else {
        addressError.style.display ="block";
    }
    if(validateEmail(email.value) && checkLen(subject.value, 9) && checkLen(firstName.value, 0) && checkLen(address.value, 24)) {
        validation.innerHTML = `<h2>the form has been sent</h2>`;
    }
}


function checkLen(value, len) {
    if(value.trim().length > len) {
        return true;
    }else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const matching = regEx.test(email);
    console.log(matching);
    //returns true or false
    return matching;

}
let returnString = "";
let illegalCharacters = "";
//function for checking invalid characters in the email
function findEmailError(email) {
        returnString ="";
        illegalCharacters ="";
    for(let i = 0; i <email.length; i++) {
        const regTest = /^[a-zA-Z0-9@._%-]/;
        console.log("\\" + email[i]);
        if(!regTest.test(("\\" + email[i])[1])) {
            const string = "invalid character(s):" 
            illegalCharacters += `${String(email[i])}`;
            
            returnString = `${string} ${illegalCharacters} `;
        }
    } return returnString;
}