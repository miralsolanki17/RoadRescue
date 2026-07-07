const loginForm = document.getElementById("loginForm");
const otpBox = document.querySelector(".otp-box");
const phoneInput = document.getElementById("phone");

otpBox.style.display = "none";

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const phone = phoneInput.value.trim();

    // Validate phone number
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Hide phone form
    loginForm.style.display = "none";

    // Show OTP section
    otpBox.style.display = "block";
});

const otpInputs = document.querySelectorAll(".otp-inputs input");

otpInputs.forEach((input, index) => {

    input.addEventListener("input", function () {

        if (this.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }

    });
       input.addEventListener("keydown", function (e) {

        if (e.key === "Backspace" && this.value === "" && index > 0) {
            otpInputs[index - 1].focus();
        }

    });

});
const verifyBtn = document.getElementById("verifyBtn");

verifyBtn.addEventListener("click", function () {

    let otp = "";

    otpInputs.forEach(input => {
        otp += input.value;
    });

    if (otp.length !== 6) {
        alert("Please enter the complete 6-digit OTP.");
        return;
    }

    window.location.href = "dashboard.html";

    
});