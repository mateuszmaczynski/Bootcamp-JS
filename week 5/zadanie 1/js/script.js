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

        getJSON("http://code.eduweb.pl/bootcamp/json/", function(data) {

            var result = "";

            data.forEach(function(obj) {

                let {
                    name,
                    username,
                    email,
                    address: {
                        geo: [lat, lon],
                    },
                    website,
                    company: {
                        name: company
                    }
                } = obj || {};

                result += 
				`<b>Imię:</b> ${name}<br/>
                <b>Pseudonim:</b> ${username}<br/>
                <b>Adres e-mail:</b> ${email}<br/>
                <b>Firma:</b> ${company}<br/>
                <b>Strona internerowa:</b> <a href="http://${website}">${website}</a><br/>
                <b>Adres:</b> <a href="http://bing.com/maps/default.aspx?cp=${lat}~${lon}">Pokaż na mapie</a><br>${"=".repeat(50)}<br/>`;

            });

            output.innerHTML = result;

        }, function(err) {
            console.log("Wystąpił błąd!");
            console.log(err.message);
        });

    }, false);

})();