var debug = false;

window.addEventListener('mousemove', function(e) {
    if (debug) {
        console.log("mouse loc: " + e.pageX + " " + e.pageY);
    }
    
    $('.fish').offset({
        left: e.pageX - 156,
        top: e.pageY
    });
})
