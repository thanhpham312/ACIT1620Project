// Variable Initializations:

// ****************************************
// Control Menu:

var controlMenu = document.getElementById("controlMenu"),
    controlBackground = document.getElementById("controlBackground"),
    controlButtonView = document.getElementById("controlButtonView"),
    controlButtonRPG = document.getElementById("controlButtonRPG"),
    controlButtonFPS = document.getElementById("controlButtonFPS"),
    controlButtonStrategy = document.getElementById("controlButtonStrategy"),
    controlButtonSimulation = document.getElementById("controlButtonSimulation"),
    controlButtonSports = document.getElementById("controlButtonSports"),
    controlButtonHorror = document.getElementById("controlButtonHorror"),
    controlButtonMMO = document.getElementById("controlButtonMMO"),
    controlButtonRacing = document.getElementById("controlButtonRacing");

// ****************************************
// Information View:

var infoView = document.getElementById("infoView"),
    infoScreen = document.getElementById("infoScreen"),
    infoScreenHeaderBackground = document.getElementById("infoScreenHeaderBackground"),
    infoScreenContentBackground = document.getElementById("infoScreenContentBackground"),
    
    infoScreenHeaderIcon = document.getElementById("infoScreenHeaderIcon"),
    infoScreenHeaderTitle = document.getElementById("infoScreenHeaderTitle"),
    infoScreenHeaderTitleInner = document.getElementById("infoScreenHeaderTitleInner");
    infoScreenContentDescriptionInner = document.getElementById("infoScreenContentDescriptionInner");

    infoScreenContentDescriptionMedia = document.getElementById("infoScreenContentDescriptionMedia");


// ****************************************
// Welcome message:

var messageWelcomeTop = document.getElementById("messageWelcomeTop"),
    messageWelcomeBottom = document.getElementById("messageWelcomeBottom");

// ****************************************
// Audio:

var soundtrackButton = document.getElementById("soundtrackButton"),
    currentTrack = new Audio('audio/superMarioBros.mp3');

// ****************************************
// Misc:

var firstLoad = 0,
    menuIsMoved = 0;

currentTrack.loop = "loop";
// currentTrack.play();

// ********************************************************************************
// Functions:

// ****************************************
// Control Menu:

function moveControlMenuIn() {
    menuIsMoved = 1;
    controlMenu.style.top = "1vw";
    controlMenu.style.left = "1vw";
    controlMenu.style.margin = "0";

    messageWelcomeTop.style.top = "-100%";
    messageWelcomeBottom.style.top = "100%";

    controlButtonView.style.width = "30%";
    controlButtonView.style.height = "30%";
    controlButtonView.style.margin = "-15% 0 0 -15%";

    setTimeout(function() {
        controlBackground.style.height = "100%";
        controlBackground.style.width = "100%";
        controlBackground.style.top = "0";
        controlBackground.style.left = "0";
        controlBackground.style.margin = "0";
        moveInfoView(1);
        setTimeout(function() {
            controlButtonRPG.style.top = "10%";
            controlButtonRPG.style.margin = "0 0 0 -10%";
            setTimeout(function() {
                controlButtonFPS.style.top = "19%";
                controlButtonFPS.style.left = "61%";
                controlButtonFPS.style.margin = "0";
                setTimeout(function() {
                    controlButtonStrategy.style.left = "70%";
                    controlButtonStrategy.style.margin = "-10% 0 0 0";
                }, 100);
                setTimeout(function() {
                    controlButtonSimulation.style.top = "61%";
                    controlButtonSimulation.style.left = "61%";
                    controlButtonSimulation.style.margin = "0";
                    setTimeout(function() {
                        controlButtonSports.style.top = "69%";
                        controlButtonSports.style.margin = "0 0 0 -10%";
                        setTimeout(function() {
                            controlButtonHorror.style.top = "61%";
                            controlButtonHorror.style.left = "19%";
                            controlButtonHorror.style.margin = "0";
                            setTimeout(function() {
                                controlButtonMMO.style.left = "10%";
                                controlButtonMMO.style.margin = "-10% 0 0 0";
                                setTimeout(function() {
                                    controlButtonRacing.style.top = "19%";
                                    controlButtonRacing.style.left = "19%";
                                    controlButtonRacing.style.margin = "0";
                                    setTimeout(function() {
                                        setTimeout(() => {
                                            controlButtonView.style.transform = "scale(0.01, 0.01) rotate(180deg)";
                                            setTimeout(() => {
                                                controlButtonView.style.backgroundImage = "url(img/icons/genreExit.svg)";
                                                setTimeout(() => {
                                                    controlButtonView.style.transform = "scale(1, 1)";
                                                    if(firstLoad == 0) {
                                                        setTimeout(() => {
                                                            populateContent("Intro");
                                                            firstLoad = 1;
                                                        }, 100);
                                                    }
                                                }, 100);
                                            }, 200);
                                        }, 200);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        }, 200);
    }, 300);
}
function moveControlMenuBack() {
    menuIsMoved = 0;
    controlButtonRPG.removeAttribute("style");
    setTimeout(function() {
        controlButtonFPS.removeAttribute("style");
        setTimeout(function() {
            controlButtonStrategy.removeAttribute("style");
            setTimeout(function() {
                controlButtonSimulation.removeAttribute("style");
                setTimeout(function() {
                    controlButtonSports.removeAttribute("style");
                    setTimeout(function() {
                        controlButtonHorror.removeAttribute("style");
                        setTimeout(function() {
                            controlButtonMMO.removeAttribute("style");
                            setTimeout(function() {
                                controlButtonRacing.removeAttribute("style");
                                setTimeout(function() {
                                    controlMenu.removeAttribute("class");
                                    controlBackground.removeAttribute("style");
                                    controlMenu.removeAttribute("style");
                                    moveInfoView(0);
                                    controlMenu.removeAttribute("style");
                                    setTimeout(function() {
                                        messageWelcomeTop.removeAttribute("style");
                                        messageWelcomeBottom.removeAttribute("style");
                                    }, 300);
                        
                                    setTimeout(() => {
                                        controlButtonView.style.transform = "rotate(-180deg)";
                                        setTimeout(() => {
                                            controlButtonView.style.transform = "rotate(-180deg)";
                                            setTimeout(() => {
                                                controlButtonView.removeAttribute("style");
                                            }, 100);
                                        }, 200);
                                    }, 200);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}


// Populate content of the infoScreen:
function populateContent(contentID) {
    if(contentID == "Intro") {
        infoScreenHeaderBackground.style.width = "100%";
        infoScreenHeaderBackground.style.opacity = "1";
        infoScreenContentBackground.style.width = "100%";
        infoScreenContentBackground.style.opacity = "1";
        setTimeout(() => {
            infoScreenHeaderIcon.style.opacity = "1";
            infoScreenHeaderTitle.style.opacity = "1";
            infoScreenContentDescriptionInner.style.opacity = "1";
            infoScreenContentDescriptionInner.style.width = "100%";
            infoScreenContentDescriptionMedia.style.opacity = "1";
            infoScreenContentDescriptionMedia.style.width = "50%";
        }, 300);
        infoScreenHeaderIcon.style.backgroundImage = genreObject[contentID].icon;
        
        infoScreenHeaderTitleInner.innerHTML = genreObject[contentID].title;
            
        infoScreenContentDescriptionInner.innerHTML = genreObject[contentID].description;
    }

    else {
        infoScreenContentDescriptionInner.style.top = "100vh";

        setTimeout(() => {
            infoScreenHeaderIcon.style.backgroundImage = genreObject[contentID].icon;
            
            infoScreenHeaderTitleInner.innerHTML = genreObject[contentID].title;
                
            infoScreenContentDescriptionInner.innerHTML = genreObject[contentID].description;
            
            infoScreenContentDescriptionInner.style.top = "0";
        }, 500);
    }
}

// Check mobile:
function setMainStyleSheet(styleSheet) {
    document.getElementById("mainStyleSheet").setAttribute("href", styleSheet);
}

function isMobile() {
    if(navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
       return true;
    }
    else {
       return false;
    }
}

function isHorizontal() {
    if((window.screen.availHeight/window.screen.availWidth) > 1) {
        return true;
    }
    else {
        return false;
    }
}

function fitRatio() {
    if(isHorizontal()) {
        setMainStyleSheet("styleSheets/indexMobile.css");
        // controlMenu.style.height = "98vw";
        // controlMenu.style.width = "98vw";
        // controlMenu.style.top = "1vw";
        // controlMenu.style.left = "1vw";
        // controlMenu.style.margin = "0";
        // controlMenu.style.position = "absolute";

        // infoView.style.width = "94vw";
        // console.log(controlMenu.offsetHeight);
        // console.log(window.screen.availWidth);
        // console.log(controlMenu.offsetHeight/window.screen.availHeight);
        // console.log(window.screen.availWidth*window.devicePixelRatio);
        // console.log(controlMenu.offsetHeight/(window.screen.availWidth*window.devicePixelRatio));
        // infoView.style.top = "110vw";

        // infoScreenContentDescriptionInner.style.width = "100%";
    }
    else {
        setMainStyleSheet("styleSheets/index.css");
    }
}

// ****************************************
// Information View:

function moveInfoView(showHide) {
    if(showHide == 0) {
        infoScreen.style.right = "-100vw";
        infoView.style.overflow = "hidden";
    }
    else if(showHide == 1) {
        infoScreen.style.right = "0";
        setTimeout(() => {
            infoView.style.overflow = "visible";
        }, 300);
    }
}

// ****************************************
// Audio:

function isPlaying(track) {
    return !track.paused;
}

function isMuted(track) {
    return !track.muted;
}

// ********************************************************************************
// Run scripts:

// Fit aspect ratio:

if(firstLoad == 0 && isHorizontal()) {
    setMainStyleSheet("styleSheets/indexMobile.css")
}

window.addEventListener('resize', function(event){
    fitRatio();
});

//Move divs:
controlButtonView.addEventListener("click", () => {
    if(menuIsMoved == 0) {
        moveControlMenuIn();
    }
    else {
        moveControlMenuBack();
    }
});

soundtrackButton.addEventListener("click", () => {
    if(!isPlaying(currentTrack)) {
        currentTrack.play();
        currentTrack.muted = false;
        soundtrackButton.style.transform = "scale(0.01, 0.01) rotate(-180deg)";
        setTimeout(() => {
            soundtrackButton.style.backgroundImage = "url(img/icons/volumeOn.svg)";
            setTimeout(() => {
                soundtrackButton.style.transform = "scale(1, 1)";
            }, 100);
        }, 200);
    }

    else {
        if(isMuted(currentTrack)) {
            currentTrack.muted = true;
            soundtrackButton.style.transform = "scale(0.01, 0.01) rotate(-180deg)";
            setTimeout(() => {
                soundtrackButton.style.backgroundImage = "url(img/icons/volumeOn.svg)";
                setTimeout(() => {
                    soundtrackButton.style.transform = "scale(1, 1)";
                }, 100);
            }, 200);
        }
        else {
            currentTrack.muted = false;
            soundtrackButton.style.transform = "scale(0.01, 0.01) rotate(-180deg)";
            setTimeout(() => {
                soundtrackButton.style.backgroundImage = "url(img/icons/volumeMuted.svg)";
                setTimeout(() => {
                    soundtrackButton.style.transform = "scale(1, 1)";
                }, 100);
            }, 200);
        }
    }
});

// Genre buttons:

controlButtonRPG.addEventListener("click", () => {
    populateContent("RPG");
});

controlButtonFPS.addEventListener("click", () => {
    populateContent("FPS");
});

controlButtonStrategy.addEventListener("click", () => {
    populateContent("Strategy");
});

controlButtonSimulation.addEventListener("click", () => {
    populateContent("Simulation");
});

controlButtonSports.addEventListener("click", () => {
    populateContent("Sports");
});

controlButtonHorror.addEventListener("click", () => {
    populateContent("Horror");
});

controlButtonMMO.addEventListener("click", () => {
    populateContent("MMO");
});

controlButtonRacing.addEventListener("click", () => {
    populateContent("Racing");
});