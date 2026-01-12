console.log("Script is running")

document.querySelector('h1')?.addEventListener('click', () => {
    alert("You clicked the heading")
})

const form = document.getElementById("registration-form")
const feedbackDiv = document.getElementById("form-feedback")

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !username || !password) {
        alert("Please fill in all fields")
        return;
    }

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push("Username must me more than 3 characters long")
    } 

    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push("Please enter a valid email")
    }


    if (password.length < 8) {
        isValid = false;
        messages.push("Password must have 8 characters")
    }

    const feedbackDiv = document.getElementById("form-feedback");
    if (feedbackDiv) {
        feedbackDiv.style.display = "block"

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.style.color = '#28a745'
            feedbackDiv.style.backgroundColor = '#d4edda'
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
            feedbackDiv.style.border = "1px solid #f5c6cb";
        }
    }

})



