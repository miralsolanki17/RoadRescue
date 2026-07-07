const loginbtn = document.querySelector(".login");

loginbtn.addEventListener("click", function(){
    alert("login Page..");
})



const learnBtn = document.querySelector(".learn-btn");

learnBtn.addEventListener("click", function () {
    document.querySelector("#services").scrollIntoView({
        behavior: "smooth"
    });
});

const requestHelpBtn = document.getElementById("requestHelpBtn");

requestHelpBtn.addEventListener("click", () => {
    window.location.href = "request.html";
});

// const helpBtn = document.querySelector(".help-btn");

// helpBtn.addEventListener("click", getLocation);

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(success, error);
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }

// function success(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     alert("Location found");

//     console.log(latitude);
//     console.log(longitude);
// }

// function error() {
//     alert("Location permission denied");
// }

const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {
            event.preventDefault();
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
