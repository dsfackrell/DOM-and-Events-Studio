// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load",function() {
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function (event) {
        if(confirm("Confirm that the shuttle is ready for takeoff.")){
            takeoffConfirmed();
        }
    });

    let landing = document.getElementById("landing");
    
    landing.addEventListener("click", function (event) {
        landShuttle();        
    });

    let missionAbort = document.getElementById("missionAbort");

    missionAbort.addEventListener("click", function (event) {
        if(confirm("Confirm that you want to abort the mission.")) {
            abortMission();   
        }
    });

});

function landShuttle() {
    alert("The shuttle is landing. Landing gear engaged.");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");    
    let shuttleHeight = document.getElementById("spaceShuttleHeight");


    flightStatus.innerHTML = "The shuttle has landed.";

    shuttleBackground.style.backgroundColor = "green";

    shuttleHeight.innerHTML = 0;
}

function takeoffConfirmed() {
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");    
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    flightStatus.innerHTML = "Shuttle in flight.";

    shuttleBackground.style.backgroundColor = "blue";

    shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
}

function abortMission() {
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");    
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    flightStatus.innerHTML = "mission aborted";

    shuttleBackground.style.backgroundColor = "green";

    shuttleHeight.innerHTML = 0;
}


