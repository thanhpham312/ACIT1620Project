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

    infoScreenContentDescriptionMediaGames = document.getElementById("infoScreenContentDescriptionMediaGames");


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

var menuIsMoved = 0;

currentTrack.loop = "loop";
// currentTrack.play();

// ********************************************************************************
// Functions:

// ****************************************
// Control Menu:
function moveControlMenu() {
    if(menuIsMoved == 0) {
        controlMenu.style.top = "1vw";
        controlMenu.style.left = "1vw";
        controlMenu.style.margin = "0";
    }
    else {
        controlMenu.removeAttribute("style");
        controlMenu.removeAttribute("class");
    }
}

function moveMessageWelcome() {
    if(menuIsMoved == 0) {
        messageWelcomeTop.style.top = "-100%";
        messageWelcomeBottom.style.top = "100%";
    }
    else {
        messageWelcomeTop.removeAttribute("style");
        messageWelcomeBottom.removeAttribute("style");
    }
}

function moveControlButtonView() {
    if(menuIsMoved == 0) {
        controlButtonView.style.width = "30%";
        controlButtonView.style.height = "30%";
        controlButtonView.style.margin = "-15% 0 0 -15%";
        setTimeout(() => {
            controlButtonView.style.transform = "scale(0.01, 0.01) rotate(180deg)";
            setTimeout(() => {
                controlButtonView.style.backgroundImage = "url(img/icons/genreExit.svg)";
                setTimeout(() => {
                    controlButtonView.style.transform = "scale(1, 1)";
                }, 100);
            }, 200);
        }, 900);
    }
    else {
        controlButtonView.style.transform = "rotate(-180deg)";
        setTimeout(() => {
            controlButtonView.style.transform = "rotate(-180deg)";
            setTimeout(() => {
                controlButtonView.removeAttribute("style");
            }, 100);
        }, 200);
    }
}

function moveControlBackground() {
    if(menuIsMoved == 0) {
        controlBackground.style.height = "100%";
        controlBackground.style.width = "100%";
        controlBackground.style.top = "0";
        controlBackground.style.left = "0";
        controlBackground.style.margin = "0";
    }
    else {
        controlBackground.removeAttribute("style");
    }
}

function moveControlButtonRPG() {
    if(menuIsMoved == 0) {
        controlButtonRPG.style.top = "10%";
        controlButtonRPG.style.margin = "0 0 0 -10%";
    }
    else {
        controlButtonRPG.removeAttribute("style");
    }
}

function moveControlButtonFPS() {
    if(menuIsMoved == 0) {
        controlButtonFPS.style.top = "19%";
        controlButtonFPS.style.left = "61%";
        controlButtonFPS.style.margin = "0";
    }
    else {
        controlButtonFPS.removeAttribute("style");
    }
}

function moveControlButtonStrategy() {
    if(menuIsMoved == 0) {
        controlButtonStrategy.style.left = "70%";
        controlButtonStrategy.style.margin = "-10% 0 0 0";
    }
    else {
        controlButtonStrategy.removeAttribute("style");
    }
}

function moveControlButtonSimulation() {
    if(menuIsMoved == 0) {
        controlButtonSimulation.style.top = "61%";
        controlButtonSimulation.style.left = "61%";
        controlButtonSimulation.style.margin = "0";
    }
    else {
        controlButtonSimulation.removeAttribute("style");
    }
}

function moveControlButtonSports() {
    if(menuIsMoved == 0) {
        controlButtonSports.style.top = "69%";
        controlButtonSports.style.margin = "0 0 0 -10%";
    }
    else {
        controlButtonSports.removeAttribute("style");
    }
}

function moveControlButtonHorror() {
    if(menuIsMoved == 0) {
        controlButtonHorror.style.top = "61%";
        controlButtonHorror.style.left = "19%";
        controlButtonHorror.style.margin = "0";
    }
    else {
        controlButtonHorror.removeAttribute("style");
    }
}

function moveControlButtonMMO() {
    if(menuIsMoved == 0) {
        controlButtonMMO.style.left = "10%";
        controlButtonMMO.style.margin = "-10% 0 0 0";
    }
    else {
        controlButtonMMO.removeAttribute("style");
    }
}

function moveControlButtonRacing() {
    if(menuIsMoved == 0) {
        controlButtonRacing.style.top = "19%";
        controlButtonRacing.style.left = "19%";
        controlButtonRacing.style.margin = "0";
    }
    else {
        controlButtonRacing.removeAttribute("style");
    }
}

var moveControlMenuAnimationFunctions = [moveControlMenu,
    moveMessageWelcome,
    moveControlButtonView,
    moveControlBackground,
    moveControlButtonRPG,
    moveControlButtonFPS,
    moveControlButtonStrategy,
    moveControlButtonSimulation,
    moveControlButtonSports,
    moveControlButtonHorror,
    moveControlButtonMMO,
    moveControlButtonRacing,
    moveInfoView
]

function moveControlMenuIn() {
    var i = 0,
    moveControlMenuAnimation = setInterval(() => {
        moveControlMenuAnimationFunctions[i]();
        i++;
        // console.log(i);
        if(i == moveControlMenuAnimationFunctions.length) {
            clearInterval(moveControlMenuAnimation);
            menuIsMoved = 1;
            populateContent("Intro");
        }
    }, 100);
}
function moveControlMenuBack() {
    var i = 0,
    moveControlMenuAnimation = setInterval(() => {
        var reversedMoveControlMenuAnimationFunctions = moveControlMenuAnimationFunctions.slice().reverse();
        reversedMoveControlMenuAnimationFunctions[i]();
        i++;
        console.log(i);
        if(i == moveControlMenuAnimationFunctions.length) {
            clearInterval(moveControlMenuAnimation);
            menuIsMoved = 0;
        }
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
            infoScreenContentDescriptionMediaGames.style.opacity = "1";
            infoScreenContentDescriptionMediaGames.style.width = "100%";
        }, 300);
        infoScreenHeaderIcon.style.backgroundImage = genreObject[contentID].icon;
        
        infoScreenHeaderTitleInner.innerHTML = genreObject[contentID].title;
            
        infoScreenContentDescriptionInner.innerHTML = genreObject[contentID].description;

        //Populate Game List:
        gameList = "";
        infoScreenContentDescriptionMediaGames.innerHTML = "";

        for(var title in gameObject) {
            console.log(title);
            console.log(gameObject[title].genre);
            gameList +=
            '<div class="gamePreviewWrap"> \n' +
                '<div class="gamePreviewWrapBuffer">' +
                    '<div class="cards gamePreviews" onclick="moveStoreView(); populateStoreView(\'' + title +'\')" style="background-image: url(./img/store/games/' + title + '/thumb.jpg);">' +
                        '<div class="gamePreviewBackground"></div>' +
                        '<div class="cards buttons gamePreviewDetails">' +
                            '<p>Preview</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }
        infoScreenContentDescriptionMediaGames.innerHTML = gameList;
    }

    else {
        infoScreenContentDescriptionInner.style.top = "100vh";
        infoScreenContentDescriptionMediaGames.style.top = "100vh";

        setTimeout(() => {
            infoScreenHeaderIcon.style.backgroundImage = genreObject[contentID].icon;
            
            infoScreenHeaderTitleInner.innerHTML = genreObject[contentID].title;
                
            infoScreenContentDescriptionInner.innerHTML = genreObject[contentID].description;
            
            infoScreenContentDescriptionInner.style.top = "0";
            infoScreenContentDescriptionMediaGames.style.top = "0";

            //Populate Game List:
            gameList = "";
            infoScreenContentDescriptionMediaGames.innerHTML = "";

            for(var title in gameObject) {
                if(gameObject[title].genre.indexOf(contentID) > -1) {
                    console.log(title);
                    console.log(gameObject[title].genre);
                    gameList +=
                    '<div class="gamePreviewWrap"> \n' +
                        '<div class="gamePreviewWrapBuffer">' +
                            '<div class="cards gamePreviews" onclick="moveStoreView(); populateStoreView(\'' + title +'\')" style="background-image: url(./img/store/games/' + title + '/thumb.jpg);">' +
                                '<div class="gamePreviewBackground"></div>' +
                                '<div class="cards buttons gamePreviewDetails">' +
                                    '<p>Preview</p>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
                }
            }
            infoScreenContentDescriptionMediaGames.innerHTML = gameList;
        }, 500);
    }
}



// ****************************************
// Information View:

function moveInfoView() {
    if(menuIsMoved == 0) {
        infoScreen.style.right = "0";
        setTimeout(() => {
            infoView.style.overflow = "visible";
        }, 300);
    }
    else {
        infoScreen.style.right = "-100vw";
        infoView.style.overflow = "hidden";
    }
}

// ****************************************
// Store Preview:

// Move Store Preview:
function moveStoreView() {
    document.getElementById("storeView").tabIndex = -1;
    document.getElementById("storeView").focus();
}

// ****************************************
// Audio:

function isPlaying(track) {
    return !track.paused;
}

function isMuted(track) {
    return !track.muted;
}

// ****************************************
// Misc:

// ********************************************************************************
// Run scripts:

// Fit aspect ratio:

fitRatioGenres();

window.addEventListener('resize', function(event){
    fitRatioGenres();
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
    populateContent("Role Playing");
    currentImageFolder = "RolePlaying";
    changeBackgroundImage();
});

controlButtonFPS.addEventListener("click", () => {
    populateContent("First Person Shooter");
    currentImageFolder = "FirstPersonShooter";
    changeBackgroundImage();
});

controlButtonStrategy.addEventListener("click", () => {
    populateContent("Strategy");
    currentImageFolder = "Strategy";
    changeBackgroundImage();
});

controlButtonSimulation.addEventListener("click", () => {
    populateContent("Simulation");
    currentImageFolder = "Simulation";
    changeBackgroundImage();
});

controlButtonSports.addEventListener("click", () => {
    populateContent("Sports");
    currentImageFolder = "Sports";
    changeBackgroundImage();
});

controlButtonHorror.addEventListener("click", () => {
    populateContent("Horror");
    currentImageFolder = "Horror";
    changeBackgroundImage();
});

controlButtonMMO.addEventListener("click", () => {
    populateContent("Massively Multiplayer Online");
    currentImageFolder = "MassivelyMultiplayerOnline";
    changeBackgroundImage();
});

controlButtonRacing.addEventListener("click", () => {
    populateContent("Racing");
    currentImageFolder = "Racing";
    changeBackgroundImage();
});