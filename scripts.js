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

    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";

    rocket.style.left = "0px";
    rocket.style.bottom = "0px";

    let up = document.getElementById("up");
    up.addEventListener("click", function (event) {
        moveShuttle("up", rocket);
    });

    let down = document.getElementById("down");
    down.addEventListener("click", function (event) {
        moveShuttle("down", rocket);
    });

    let left = document.getElementById("left");
    left.addEventListener("click", function (event) {
        moveShuttle("left", rocket);
    });

    let right = document.getElementById("right");
    right.addEventListener("click", function (event) {
        moveShuttle("right", rocket);
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

function moveShuttle(direction, rocket) {
    
    let bottomOfRocket = parseInt(rocket.style.bottom);
    let leftOfRocket = parseInt(rocket.style.left);
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    if(direction === "up") {
        rocket.style.bottom = bottomOfRocket + 10 + "px";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    } else if (direction === "down") {
        rocket.style.bottom = bottomOfRocket - 10 + "px";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
    } else if (direction === "left") {
        rocket.style.left = leftOfRocket + 10 + "px";
    } else if (direction === "right") {
        rocket.style.left = leftOfRocket - 10 + "px";
    }
}


