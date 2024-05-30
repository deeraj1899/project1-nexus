document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("submit-button").addEventListener("click", validateForm);
});

function validateForm(event) {
    event.preventDefault(); 

   
    var Email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

   
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";

    var isValid = true;

   
    if (Email === "") {
        document.getElementById("email-error").innerHTML = "Please enter an email";
        isValid = false;
    } else if (!isValidEmail(Email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        isValid = false;
    }

    
    if (password === "") {
        document.getElementById("password-error").innerHTML = "Please enter a password.";
        isValid = false;
    }else if (password.length < 6) {
        document.getElementById("password-error").innerHTML = "Password must be at least 6 characters long.";
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        document.getElementById("password-error").innerHTML = "Password must contain at least one capital letter.";
        isValid = false;
    } else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
        document.getElementById("password-error").innerHTML = "Password must contain at least one special character.";
        isValid = false;
    }

    return isValid;
}


function isValidEmail(input) {
   
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(input);
}