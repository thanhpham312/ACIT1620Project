var slideIndex = 0,
    slideVisibility = 1,
    demoWindow = document.getElementById("demoWindow"),
    demoScreen = document.getElementById("demoScreen");

function populateDemoScreen() {
    demoScreen.style.top = "-100vh";
    setTimeout(() => {
        var demoScreenContent = "";
        demoScreenContent = '<p id="demoTitle">' + demoObject[slideIndex].title + '</p> \n';
        for(var points in demoObject[slideIndex].point)
        demoScreenContent += '<p>' + demoObject[slideIndex].point[points] + '</p>';
        demoScreen.innerHTML = demoScreenContent;

        demoScreen.style.top = "50vh";
    }, 300);
}

function init() {
    var demoScreenContent = "";
    demoScreenContent = '<p id="demoTitle">' + demoObject[slideIndex].title + '</p> \n';
    for(var points in demoObject[slideIndex].point)
    demoScreenContent += '<p>' + demoObject[slideIndex].point[points] + '</p>';
    demoScreen.innerHTML = demoScreenContent;
}

init()

document.addEventListener("keyup", (ev) => {
    if(ev.keyCode == 32) {
        setTimeout(() => {
            if(slideVisibility == 0) {
                demoScreen.style.top = "-100vh";
                demoWindow.style.zIndex = "-100";
                slideVisibility = 1;
            }
            else {
                demoScreen.style.top = "50vh";
                demoWindow.style.zIndex = "100";
                slideVisibility = 0;
            }
        }, 301);
    }
    if(ev.keyCode == 39) {
        //Move forwards:
        slideIndex++;
        if(slideIndex == demoObject.length) {
            slideIndex = 0;
        }
        populateDemoScreen();
    }
    else if(ev.keyCode == 37) {
        //Move backwards:
        slideIndex--;
        if(slideIndex == -1) {
            slideIndex = demoObject.length - 1;
        }
        populateDemoScreen();
    }

    //Change dark mode:
    if(ev.keyCode == 76) {
        document.documentElement.style.setProperty("--main-color", "rgba(3,169,244, 1)");
        document.documentElement.style.setProperty("--background-color", "rgba(227,242,253, 1)");
    }
    else if(ev.keyCode == 68) {
        document.documentElement.style.setProperty("--main-color", "rgba(38, 50, 56, 1)");
        document.documentElement.style.setProperty("--background-color", "rgba(144, 164, 174, 1)");        
    }
})