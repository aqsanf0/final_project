/*Name this external file gallery.js*/

function setImagesSrcAlt() {
    var imageContainer = document.getElementById("preview");
    var pictureNames = ["bells.jpg", "yellow_flower.jpg", "pink_flower.jpg", "bay_bridge.jpg", "beach_monterey.jpg", "terman_fountain.jpg"];
    var pictureAlts = ["Wind Chimes", "A nice yellow-colored flower", "Pink flowers - everywhere", "San Francisco Bay Bridge",
     "Scenic Route to Monterey Bay", "A popular spot for hanging out after work"];
    


    for (let i = 0; i < pictureNames.length; i++) {
        var imgElement = document.createElement("img");
        imgElement.className = "preview";
        imgElement.alt = pictureAlts[i];
        
        imgElement.src = "images/" + pictureNames[i];
        // console.log("images/" + pictureNames[i]);
        imgElement.setAttribute("onmouseover", "upDate(this)");
        imgElement.setAttribute("onmouseout", "unDo()");
        imgElement.setAttribute("onfocus", "upDate(this)");
        imgElement.setAttribute("onblur", "unDo()");
        imgElement.setAttribute("tabindex", i + 1); // Setting tabindex dynamically

        imageContainer.appendChild(imgElement);
    }
}

function upDate(previewPic) {
    console.log(previewPic.src)
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";;
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundColor = "#8e68ff";    
}


// Call the setImagesSrcAlt function after the HTML has been loaded
window.onload = function() {
    setImagesSrcAlt();
};
