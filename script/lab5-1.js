window.addEventListener('load', (event) => {

    // var theNewScript = document.createElement("script");
    // theNewScript.type = "text/javascript";
    // theNewScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js";
    // document.getElementsByTagName("head")[0].appendChild(theNewScript);

    // var waitForLoad = function () {
    //     if (typeof jQuery == "undefined") {
    //         window.setTimeout(waitForLoad, 1000);
    //     }
    // };
    // window.setTimeout(waitForLoad, 1000);
    console.log("got here");
    var required = document.querySelectorAll("textarea");
    

    for(var i=0; i<required.length; i++){
        console.log("got here" + i);
        required[i].addEventListener("change", function(e){
            //$("required").removeClass("required")
            console.log("got here yo");
            element = document.styleSheets[2].cssRules[0].style;
            element.removeProperty('background-color');
        });
    };
});
