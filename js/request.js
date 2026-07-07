// Form
const helpForm = document.getElementById("helpForm");

// GPS Button
const locationBtn = document.querySelector(".location-btn");

// Location Input
const locationInput = document.getElementById("location");


// =========================
// Get Current Location
// =========================

locationBtn.addEventListener("click", () => {

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(

            (position)=>{

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                locationInput.value =
                `Latitude: ${latitude}, Longitude: ${longitude}`;

            },

            ()=>{

                alert("Unable to fetch location.");

            }

        );

    }

    else{

        alert("Geolocation is not supported.");

    }

});


// =========================
// Submit Form
// =========================

helpForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const helpData = {

        vehicleType:document.getElementById("vehicleType").value,

        problem:document.getElementById("problemCategory").value,

        priority:document.getElementById("priority").value,

        location:document.getElementById("location").value,

        phone:document.getElementById("phone").value,

        title:document.getElementById("title").value,

        description:document.getElementById("description").value,

        status:"Pending"

    };



    let requests =
    JSON.parse(localStorage.getItem("helpRequests")) || [];

    requests.push(helpData);

    localStorage.setItem(
        "helpRequests",
        JSON.stringify(requests)
    );

    alert("✅ Help Request Submitted Successfully!");

    helpForm.reset();

    window.location.href="dashboard.html";

});