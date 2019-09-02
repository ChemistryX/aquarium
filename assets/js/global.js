window.addEventListener('load', () => {
    var oldX = 0;
    function handleFish(e) {
        if (e.pageX < oldX) {
            $('.fish').css({
                'transform': 'scaleX(-1)'
            })
            $('.fish').offset({
                left: e.pageX + 64,
                top: e.pageY
            });
        } else if (e.pageX > oldX) {
            $('.fish').css({
                'transform': ''
            })
            $('.fish').offset({
                left: e.pageX - 156,
                top: e.pageY
            });
        }
        oldX = e.pageX;
    }

    // original source: https://codepen.io/incompl/pen/skpGa
    function handleMouseTrail(e) {
        [1, .9, .8, .5, .1].forEach(function (i) {
            var j = (1 - i) * 50;
            var elem = document.createElement('div');
            var size = Math.ceil(Math.random() * 15 * i) + 'px';
            elem.style.position = 'fixed';
            elem.style.top = e.pageY + Math.round(Math.random() * j - j / 2) + 'px';
            elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
            elem.style.width = size;
            elem.style.height = size;
            elem.style.background = 'hsla(' +
                Math.round(Math.random() * 360) + ', ' +
                '100%, ' +
                '50%, ' +
                i + ')';
            elem.style.borderRadius = size;
            elem.style.pointerEvents = 'none';
            document.body.appendChild(elem);
            window.setTimeout(function () {
                document.body.removeChild(elem);
            }, Math.round(Math.random() * i * 2500));
        });
    }

    window.addEventListener('mousemove', handleFish);
    console.log('handleFish initialized')
    window.addEventListener('mousemove', handleMouseTrail);
    console.log('handleMouseTrail initialized');
})