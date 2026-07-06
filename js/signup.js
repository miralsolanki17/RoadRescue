// Toast helper
function showToast(type, message) {
    const toastContainer = document.getElementById("toastContainer");
    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="message">${message}</span>
        <button type="button" class="close-btn" aria-label="Dismiss notification">×</button>
    `;

    const closeBtn = toast.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => removeToast(toast));

    toastContainer.appendChild(toast);

    setTimeout(() => removeToast(toast), 4200);
}

function removeToast(toast) {
    toast.style.animation = "slideOut 200ms ease forwards";
    toast.addEventListener("animationend", () => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    });
}

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
        showToast("warning", "Please enter your full name.");
        return;
    }

    // Mobile Number Validation
    if (phone.length !== 10 || isNaN(phone)) {
        showToast("warning", "Please enter a valid 10-digit mobile number.");
        return;
    }

    // Vehicle Type Validation
    if (vehicle === "") {
        showToast("warning", "Please select your vehicle type.");
        return;
    }

    // Vehicle Number Validation
    if (vehicleNo === "") {
        showToast("warning", "Please enter your vehicle number.");
        return;
    }

    // Password Validation
    if (password.length < 6) {
        showToast("warning", "Password must be at least 6 characters.");
        return;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        showToast("error", "Passwords do not match.");
        return;
    }

    // Success
    showToast("success", "Account created successfully!");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1200);

});