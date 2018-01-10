var isMouseTracking = false;

/* we need a function to update the position
on our front end, we have 2 labels - 
one for x, on for y */
function updateMousePosition() {
    // if tracking is enabled, update the labels
    if (isMouseTracking) {
        /* we can get the mouse positions with 
        event.clientX and event.clientY
        we can update the text of an html element with the 
        innerText property */
        var positionX = document.getElementById("mousePositionX");
        positionX.innerText = event.clientX;
        var positionY = document.getElementById("mousePositionY");
        positionY.innerText = event.clientY;
    }
}

// we need a function to toggle whether tracking is enabled
function toggleTracking() {
    // if isMouseTracking is true, set it to false
    // otherwise it is false, and needs to be set to true
    isMouseTracking = !isMouseTracking;

    // update the tracking status to show whether it is enabled
    if (isMouseTracking) {
        document.getElementById("trackingStatus").innerText = "TRACKING";
    } else {
        document.getElementById("trackingStatus").innerText = "NOT TRACKING";
    }
}