// Variable Initializations:

var storeSearchResultWindow = document.getElementById("storeSearchResultWindow"),
    storeDetailView = document.getElementById("storeDetailView"),
    storeViewBackground = document.getElementById("storeViewBackground"),
    storeDetailGameThumbnail = document.getElementById("storeDetailGameThumbnail"),
    storeViewPublisherInfo = document.getElementById("storeViewPublisherInfo"),
    screenshotSlideMainScreenShot = document.getElementById("screenshotSlideMainScreenShot"),
    storeViewScreenshotSlideSelector = document.getElementById("storeViewScreenshotSlideSelector"),
    storeViewGameInfoWrap = document.getElementById("storeViewGameInfoWrap"),
    storeViewButtonBuyStandard = document.getElementById("storeViewButtonBuyStandard"),
    storeViewButtonBuyDeluxe = document.getElementById("storeViewButtonBuyDeluxe"),
    
    storeDetailViewBackButton = document.getElementById("storeDetailViewBackButton"),


    commentSubmitButton = document.getElementById("commentSubmitButton"),
    commentClearButton = document.getElementById("commentClearButton"),
    commentInputUsername = document.getElementById("commentInputUsername"),
    commentInputComment = document.getElementById("commentInputComment"),

    storeViewCommentInnerWrap = document.getElementById("storeViewCommentInnerWrap"),
    
    
    storeSearchResultStatisticButton = document.getElementById("storeSearchResultStatisticButton"),
    storeSearchViewStatisticWrap = document.getElementById("storeSearchViewStatisticWrap"),
    storeSearchViewBackground = document.getElementById("storeSearchViewBackground"),


    currentTitle = "",

    currentGenreFilter = "All",
    searchGenreListStatus = "hidden";

// ********************************************************************************
// Functions:

function populateResult(currentGameList) {
    gameList = "";
    storeSearchResultWindow.innerHTML = "";

    for(var title in currentGameList) {
        gameList +=
        '<div class="gamePreviewWrap"> \n' +
            '<div class="gamePreviewWrapBuffer">' +
                '<div class="cards gamePreviews" onclick="moveStoreDetailView(); populateStoreView(\'' + title +'\'); loadCommentLocal();" style="background-image: url(./img/store/games/' + title + '/thumb.jpg);">' +
                    '<div class="gamePreviewBackground"></div>' +
                    '<div class="cards buttons gamePreviewDetails">' +
                        '<p>Details</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }
    storeSearchResultWindow.innerHTML = gameList;
}

function moveStoreDetailView() {
    storeDetailView.style.top = "8vh";
    setTimeout(() => {
        storeDetailViewBackButton.style.left = "5vh";
    }, 300);
    currentWindow = "storeDetailView";
}

function populateStoreView(title) {
    currentTitle = title;
    storeViewBackground.style.background = "linear-gradient(rgba(255, 255, 255, 0), rgba(38, 50, 56, 1)), url(./img/store/games/" + title + "/background.jpg)";
    storeDetailGameThumbnail.style.backgroundImage = 'url(./img/store/games/' + title + '/thumb.jpg)';

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

// ****************************************
// Comments/Local Storage:

function saveCommentLocal() {
    if(commentInputUsername.value != "" && commentInputComment.value != "") {
        var commentArrLoad = localStorage.getItem("comments");
        var commentList = JSON.parse(commentArrLoad);

        if(commentList == null) {
            commentList = [];
        }

        commentList.push({
            "game": currentTitle,
            "username": commentInputUsername.value,
            "comment": commentInputComment.value.replace(/\n/g, "<br/>")
        })

        var commentArrSave = JSON.stringify(commentList);
        localStorage.setItem("comments", commentArrSave);
    }
    else {
        alert("To leave a comment, please fill out botth of the above fields.")
    }
}

function loadCommentLocal() {
    var commentArrLoad = localStorage.getItem("comments");
    var commentList = JSON.parse(commentArrLoad);

    var storeViewCommentInnerWrapInner = "";
    var currentTime = new Date();

    for(var comment in commentList) {
        if(commentList[comment].game == currentTitle) {
            storeViewCommentInnerWrapInner +=
            '<div class="cards storeViewComments">\n' +
                '<div class="storeViewCommentUsername" id="storeViewCommentUsername' + comment + '">' + commentList[comment].username + '</div>\n' +
                '<div class="storeViewCommentComment" id="storeViewCommentComment' + comment + '">' + commentList[comment].comment + '</div>\n' +
                '<div class="storeViewCommentInfo" id="storeViewCommentInfo' + comment + '">Posted on: ' + currentTime.getFullYear() + '/' + (currentTime.getMonth() + 1) + '/' + currentTime.getDate() + ' - ' + currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds() + '</div>\n' +
            '</div>';
        }
    }

    storeViewCommentInnerWrap.innerHTML = storeViewCommentInnerWrapInner;
}

// ****************************************
// Statistics:

function showStatisticView() {
    if(storeSearchViewStatisticWrap !== document.activeElement) {
        storeSearchViewStatisticWrap.tabIndex = -1;
        storeSearchViewStatisticWrap.focus();
    }
    else {
        storeSearchViewStatisticWrap.tabIndex = -1;
        storeSearchViewStatisticWrap.blur();
    }
}

function popuplateStatisticView() {
    var storeSearchViewStatisticWrapInner = "";

    var searchDictLoad = localStorage.getItem("searchStatistics");
    var searchStatisticObject = JSON.parse(searchDictLoad);

    for(item in searchStatisticObject) {
        var sortedDict = [];
        for (var i in searchStatisticObject[item]) {
            sortedDict.push([i, searchStatisticObject[item][i]]);
        }
        
        sortedDict.sort(function(a, b) {
            return b[1] - a[1];
        });

        if(sortedDict.length != 0) {
            if(item == "title") {
                console.log(sortedDict[0][0]);
                storeSearchViewStatisticWrapInner +=
                '<p class="cards"><strong>Most searched ' + item + ': </strong>' + gameObject[sortedDict[0][0]][item] + '</p>\n';
            }
            else {
                storeSearchViewStatisticWrapInner +=
                '<p class="cards"><strong>Most searched ' + item + ': </strong>' + sortedDict[0][0] + '</p>\n';
            }
            
        }
    }

    storeSearchViewStatisticWrap.innerHTML = storeSearchViewStatisticWrapInner;
}

// ********************************************************************************
// Run sripts:

// Fit aspect ratio:

fitRatioIndex();

window.addEventListener('resize', function(event){
    fitRatioIndex();
});

// Comments:

commentSubmitButton.addEventListener("click", () => {
    saveCommentLocal();
    loadCommentLocal();
});

commentClearButton.addEventListener("click", () => {
    commentInputUsername.value = "";
    commentInputComment.value = "";
});

storeDetailViewBackButton.addEventListener("click", () => {
    storeDetailView.removeAttribute("style");
    storeDetailViewBackButton.removeAttribute("style");
    currentWindow = "search";
    storeViewCommentInnerWrap.innerHTML = "";
    commentInputUsername.value = "";
    commentInputComment.value = "";
});

storeSearchResultStatisticButton.addEventListener("click", () => {
    showStatisticView();
    popuplateStatisticView();
})