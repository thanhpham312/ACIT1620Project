// Check mobile:

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

function fitRatioGenres() {
    if(isHorizontal()) {
        document.getElementById("mainStyleSheet").setAttribute("href", "styleSheets/genresMobile.css");
        document.getElementById("storePreviewStyleSheet").setAttribute("href", "styleSheets/genresStoreMobile.css");
    }
    else {
        document.getElementById("mainStyleSheet").setAttribute("href", "styleSheets/genres.css");
        document.getElementById("storePreviewStyleSheet").setAttribute("href", "styleSheets/genresStore.css");
    }
}

function fitRatioIndex() {
    if(isHorizontal()) {
        document.getElementById("mainStyleSheet").setAttribute("href", "styleSheets/indexMobile.css");
        document.getElementById("storeStyleSheet").setAttribute("href", "styleSheets/indexStoreMobile.css");
        document.getElementById("searchStyleSheet").setAttribute("href", "styleSheets/indexSearchMobile.css");
    }
    else {
        document.getElementById("mainStyleSheet").setAttribute("href", "styleSheets/index.css");
        document.getElementById("storeStyleSheet").setAttribute("href", "styleSheets/indexStore.css");
        document.getElementById("searchStyleSheet").setAttribute("href", "styleSheets/indexSearch.css");
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