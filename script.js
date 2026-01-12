document.addEventListener("DOMContentLoaded", () => {
  // Get the form
  const form = document.querySelector("form");

  // make sure form exists
  if (!form) {
    console.error("Form not found");
    return;
  }

  // Get feedback element
  const feedbackDiv = document.getElementById("feedback");

  // Get all input fields
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // Make sure all inputs exist
  if (!usernameInput || !emailInput || !passwordInput || !feedbackDiv) {
    console.error("One or more required elements not found");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get trimmed values
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validation variables
    let isValid = true;
    const messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long");
    }

    // Email validation (very basic)
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address");
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long");
    }

    // Show feedback
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.style.backgroundColor = "#d4edda";
      feedbackDiv.style.border = "1px solid #c3e6cb";
      feedbackDiv.style.padding = "1rem";
      feedbackDiv.style.borderRadius = "6px";

      // Optional: clear the form
      usernameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.style.backgroundColor = "#f8d7da";
      feedbackDiv.style.border = "1px solid #f5c6cb";
      feedbackDiv.style.padding = "1rem";
      feedbackDiv.style.borderRadius = "6px";
    }
  });
});
