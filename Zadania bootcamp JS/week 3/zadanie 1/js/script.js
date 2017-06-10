(function(){
    if( typeof String.prototype.repeatt === "function" ) return; //checking that this function exist

    String.prototype.repeatt = function(count){

        if(count < 0){
            throw new RangeError("Repeat count must be non-negative");
        }

        var output = "";

        for (var i=0; i<count; i++){

            output +=  this.toString();
        }

        return output;
    };

})();