(function(){

    function fecz(url, success, failure){

        var xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);

        xhr.onload = function () {

            if(xhr.status === 200){
                success(xhr.responseText);
            } else {
                failure (new Error ("Wystąpił błąd!. Kod statusu HTTP to: " + xhr.status));
            }

        };

        xhr.onerror = function () {

            failure( new Error("Wystąpił nieoczekiwany błąd!") );

        };

        xhr.send();
    }

    var button = document.querySelector("#button"),
        output = document.querySelector("#output");

    button.addEventListener("click",function(e){

        fecz("http://code.eduweb.pl/bootcamp/users/", function(data){
            console.log("sukces");
            output.textContent = data;
        }, function(err){
            console.log("wystąpił błąd!");
            console.log(err.message);
        });
    },false);


})();