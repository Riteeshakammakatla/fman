function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    // Clear any previous error message
    errorMessage.textContent = '';
  
    // Simple email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }
  
    // Check if password is empty
    if (password.trim() === "") {
        errorMessage.textContent = "Password cannot be empty.";
        return false;
    }
  
    // If validation is successful
    alert("Login successful!");
    return true;  // Form is valid and can be submitted
  }