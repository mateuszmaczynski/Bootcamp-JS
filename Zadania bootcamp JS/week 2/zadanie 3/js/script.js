(function() {
    var time = 10,
        counter = document.getElementById("counter"),
        button = document.getElementById("button");

    function tick() {
        counter.textContent = time--;
    }

    function count(cb) {
        if (time >= 0) {
            tick();
            setTimeout(count.bind(this, cb), 1000);
        }else{
            cb();
        }
    }

    button.addEventListener("click", function () {

        this.disabled = true;

        count(function(){
            button.disabled = false;
            counter.textContent= "_ _";
            time = 10;
            console.log("Odliczanie zakończone.");
        });

    }, false)

})();