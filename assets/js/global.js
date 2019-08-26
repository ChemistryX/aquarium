$(document).mousemove, function (e) {    
    $('.fish').offset({
        left: e.pageX,
        top: e.pageY
    });
};