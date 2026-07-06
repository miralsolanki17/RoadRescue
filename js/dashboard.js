// ===============================
// Dashboard JavaScript
// ===============================

// Current Location
const locationText = document.getElementById("locationText");

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            locationText.innerHTML =
                `
                Latitude : ${latitude.toFixed(5)} <br>
                Longitude : ${longitude.toFixed(5)}
                `;

        },

        function () {

            locationText.innerHTML =
                "Unable to access your location.";

        }

    );

} else {

    locationText.innerHTML =
        "Geolocation is not supported by your browser.";

}

// ===============================
// Logout Button
// ===============================

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        window.location.href = "login.html";

    }

});

// ===============================
// Request Help Button
// ===============================

const requestBtn = document.querySelector(".request-btn");

requestBtn.addEventListener("click", function () {

    window.location.href = "request-help.html";

});