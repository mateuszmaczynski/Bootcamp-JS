function getJSON(url, success, failure) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.setRequestHeader("Accept", "application/json");

    xhr.onload = function() {

        if(xhr.status == 200) {
            try {
                success( JSON.parse(xhr.responseText) );
            } catch(e) {
                failure(e);
            }
        } else {
            failure( new Error("Wystąpił błąd!. Kod statusu HTTP to: " + xhr.status) );
        }

    };

    xhr.onerror = function(e) {
        failure( new Error("Wystąpił nieoczekiwany błąd!") );
    };

    xhr.send();

}

(function() {

    var button = document.querySelector("#button"),
        output = document.querySelector("#output");

    button.addEventListener("click", function(e) {

        getJSON("http://code.eduweb.pl/bootcamp/users/", function(data) {

            console.log("Sukces");

            output.textContent = JSON.stringify(data, null, 4);

        }, function(err) {

            console.log("Wystąpił błąd!");

            console.log(err.message);

        });

    }, false);

})();