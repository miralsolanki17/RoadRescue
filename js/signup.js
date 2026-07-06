// Select Form
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get Values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const vehicle = document.getElementById("vehicle").value;
    const vehicleNo = document.getElementById("vehicleNo").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Full Name Validation
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    // Mobile Number Validation
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Vehicle Type Validation
    if (vehicle === "") {
        alert("Please select your vehicle type.");
        return;
    }

    // Vehicle Number Validation
    if (vehicleNo === "") {
        alert("Please enter your vehicle number.");
        return;
    }

    // Password Validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Success
    alert("Account Created Successfully!");

    // Redirect to Login Page
    window.location.href = "login.html";

});