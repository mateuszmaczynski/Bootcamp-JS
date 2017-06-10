(function() {

    "use strict";

    function debounce(fn, time) {

        var timeout = null;

        return function() { // handleScroll

            var context = this,
                args = arguments;

            clearTimeout(timeout);

            timeout = setTimeout(function() {
                fn.apply(context, args);
            }, time);

        };
    }

    var handleScroll = debounce(function(e) {
        // console.log(this);
        // console.log(e);
        console.log("Scrollujemy!");
    }, 200);

    window.addEventListener("scroll", handleScroll, false);

    var handleResize = debounce(function() {
        console.log("Zmieniamy rozmiar okna!");
    }, 500);

    window.addEventListener("resize", handleResize, false);

    document.body.style.height = "2000px";

    var input = document.querySelector("#input");
    var handleKeyup = debounce(function(e) {
        console.log(e.target.value);
    }, 500);

    input.addEventListener("keyup", handleKeyup, false);

})();