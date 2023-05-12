function validatePassword(){
    let password = document.getElementById("password")
    let passwordC = document.getElementById("passwordC")
    if(password.value != passwordC.value) {
        passwordC.setCustomValidity("Passwords Don't Match");
    } else {
        passwordC.setCustomValidity('');
    }
}