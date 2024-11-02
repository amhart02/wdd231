function submitForm (event) {
    console.log("Form Submitted")
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    
    let error = ""

    if (name.value === "") {
        error += "Name is required.\n"
    } 
    if (email.value === "") {
        error += "Email is required. \n"
    }
    if (error) {
        event.preventDefault();
        document.getElementById("form-error").textContent = error;
    }


}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.getElementById("contact-form").addEventListener("submit", submitForm)