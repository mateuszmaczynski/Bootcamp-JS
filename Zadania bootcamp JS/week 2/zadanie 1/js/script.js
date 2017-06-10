(function(){
    var button = document.getElementById("button1");
    var element = document.getElementById('text');

    button.addEventListener('click',function(){

        if(  element.classList.contains("hidden") ){
             element.classList.remove("hidden");

             button.textContent = button.dataset.hidden;
        } else{
             element.classList.add("hidden");
             button.textContent = button.dataset.show;
        }
    },false);
})();