(function() {

    function Toggler(selector) {

        if( !(this instanceof Toggler) ) {
            return new Toggler(selector);
        }

        this._elem = document.querySelector(selector);

    }

    Toggler.prototype.getElem = function() {

        return this._elem;

    };

    Toggler.prototype.show = function() {

        this._elem.style.display = "block";

    };

    Toggler.prototype.hide = function() {

        this._elem.style.display = "none";

    };

    Toggler.prototype.isHidden = function() {

        return window.getComputedStyle(this._elem).display === "none";

    };

    var elem = Toggler("#section");
    var button = document.querySelector("#button");



    button.addEventListener("click", function() {

        if( elem.isHidden() ) {
            elem.show();
            button.textContent = button.dataset.hide;
        } else {
            elem.hide();
            button.textContent = button.dataset.show;
        }

    }, false);

})();