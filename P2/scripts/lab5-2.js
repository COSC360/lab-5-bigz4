let style = document.createElement("style");
style.innerHTML= ".hoverNode{ border : solid black 1px; background-color: yellow; color : black; cursor : pointer;}";
document.head.appendChild(style);

window.onload = function(){
    let i = document.querySelectorAll("*");
    i.forEach(function(element) {
        if(element.nodeType !== Node.TEXT_NODE){
            var hoverNode = document.createElement("span");
            hoverNode.classList.add("hoverNode");
            hoverNode.innerHTML = element.tagName;
            element.appendChild(hoverNode);

            hoverNode.addEventListener("click",function(event){
                alert("You just clicked an ${element.tagName} it ${element.id} has an ID of ${element.id}: doesn't have an ID} and contains ${element.innerHTML}");
            });
        }
    });
}