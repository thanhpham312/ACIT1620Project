var currentImageFolder = "general",
    currentPanel = document.getElementById("background"),
    currentBackgroundImage = 1;

var backgroundRotation = setInterval (() => {
    changeBackgroundImage();
}, 10000)

function changeBackgroundImage() {
    if(currentImageFolder == "general") {
        currentBackgroundImage = Math.floor((Math.random() * 2) + 1);
        currentPanel.style.backgroundImage = "url(img/background/" + currentImageFolder + "/" + currentBackgroundImage + ".jpg)";
    }
    else {
        currentBackgroundImage = Math.floor((Math.random() * 5) + 1);
        currentPanel.style.backgroundImage = "url(img/background/genre/" + currentImageFolder + "/" + currentBackgroundImage + ".jpg)";
    }
    
    
    // console.log("Background changed.");
}

