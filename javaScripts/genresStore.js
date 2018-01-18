var screenshotSlideMainScreenShot = document.getElementById("screenshotSlideMainScreenShot"),
    storeViewScreenshotSlideSelector = document.getElementById("storeViewScreenshotSlideSelector"),
    storeViewPublisherInfo = document.getElementById("storeViewPublisherInfo"),
    storeViewGameInfoWrap = document.getElementById("storeViewGameInfoWrap"),
    storeViewGameThumbnail = document.getElementById("storeViewGameThumbnail"),
    storeViewButtonBuyStandard = document.getElementById("storeViewButtonBuyStandard"),
    storeViewButtonBuyDeluxe = document.getElementById("storeViewButtonBuyDeluxe"),

    currentTitle = "";


function populateStoreView(title) {
    currentTitle = title;
    storeViewBackground.style.background = "linear-gradient(rgba(255, 255, 255, 0), rgba(38, 50, 56, 1)), url(./img/store/games/" + title + "/background.jpg)";
    storeViewGameThumbnail.style.backgroundImage = 'url(./img/store/games/' + title + '/thumb.jpg)';

    storeViewPublisherInfo.innerHTML = 
        '<p><strong>Developer: </strong>' + gameObject[title].developer + '</p>\n' +
        '<p><strong>Publisher: </strong>' + gameObject[title].publisher + '</p>\n' +
        '<p><strong>Release Date: </strong>' + gameObject[title].releasedate + '</p>\n' +
        '<p><strong>Genres: </strong>' + gameObject[title].genre.join(", ") + '</p>';

    screenshotSlideMainScreenShot.style.backgroundImage = 'url(./img/store/games/'+ title + '/'+ title + '_SS1.jpg)';
    storeViewScreenshotSlideSelector.innerHTML = 
        '<img class="cards buttons" src="./img/store/games/'+ title + '/'+ title + '_SS1.jpg" onclick="changeSlideMainScreenShot(1);"></img>\n' +
        '<img class="cards buttons" src="./img/store/games/'+ title + '/'+ title + '_SS2.jpg" onclick="changeSlideMainScreenShot(2);"></img>\n' +
        '<img class="cards buttons" src="./img/store/games/'+ title + '/'+ title + '_SS3.jpg" onclick="changeSlideMainScreenShot(3);"></img>\n' +
        '<img class="cards buttons" src="./img/store/games/'+ title + '/'+ title + '_SS4.jpg" onclick="changeSlideMainScreenShot(4);"></img>\n' +
        '<img class="cards buttons" src="./img/store/games/'+ title + '/'+ title + '_SS5.jpg" onclick="changeSlideMainScreenShot(5);"></img>\n';
    
    var storeViewGameInfoWrapInner = "";
    storeViewGameInfoWrapInner += '<p>' + gameObject[title].description + '</p>\n';
    for(var i in gameObject[title].features) {
        storeViewGameInfoWrapInner += '<p><strong>' + gameObject[title].features[i].short + ': </strong>' + gameObject[title].features[i].detailed + '</p>'
    }
    storeViewGameInfoWrap.innerHTML = storeViewGameInfoWrapInner;

    if(gameObject[title].price.standard != 0) {
        storeViewButtonBuyStandard.removeAttribute("style");
        storeViewButtonBuyStandard.innerHTML = "Buy Standard - $" + gameObject[title].price.standard;
    }
    else {
        storeViewButtonBuyStandard.style.opacity = "0.5";
        storeViewButtonBuyDeluxe.innerHTML = "Buy Standard - NA";
    }

    if(gameObject[title].price.deluxe != 0) {
        storeViewButtonBuyDeluxe.removeAttribute("style");
        storeViewButtonBuyDeluxe.innerHTML = "Buy Deluxe - $" + gameObject[title].price.deluxe;
    }
    else {
        storeViewButtonBuyDeluxe.style.opacity = "0.5";
        storeViewButtonBuyDeluxe.innerHTML = "Buy Deluxe - NA";
    }
}

function changeSlideMainScreenShot(imgNum) {
    screenshotSlideMainScreenShot.style.backgroundImage = 'url(./img/store/games/'+ currentTitle + '/'+ currentTitle + '_SS'+ imgNum + '.jpg)';
}