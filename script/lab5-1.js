window.onload = function() {

    //console.log("got here");
    var required = document.querySelectorAll(".required");
    
    for(var i=0; i<required.length; i++){
        //console.log("got here" + i);
        required[i].addEventListener("change", function(e){
            //console.log("got here yo" + i);

            if(this.value!="" || this.checked){
                this.style.backgroundColor="#FFFFFF";
            }else{
                this.style.backgroundColor="#FF0000"; 
            }
            
        });

        required[i].addEventListener
    };

    document.getElementById("mainForm").onsubmit = function(e){
        alert("fill in required fields");
        for( var i=0; i<required.length; i++){
            if(required[i].value=="" || required[i].checked){
                //console.log("no submit for you! >:)");
                e.preventDefault();
            }
        }
    };
};
