// Variable Initializations:

var storeSearchGenreSelectTitle = document.getElementById("storeSearchGenreSelectTitle"),
    storeSearchGenreSelectList = document.getElementById("storeSearchGenreSelectList"),

    storeSearchDeveloperSelectTitle = document.getElementById("storeSearchDeveloperSelectTitle"),
    storeSearchDeveloperSelectList = document.getElementById("storeSearchDeveloperSelectList"),
    
    storeSearchPublisherSelectTitle = document.getElementById("storeSearchPublisherSelectTitle"),
    storeSearchPublisherSelectList = document.getElementById("storeSearchPublisherSelectList"),
    
    storeSearchSearchbar = document.getElementById("storeSearchSearchbar"),

    currentGenreFilter = "All",
    currentDeveloperFilter = "All",
    currentPublisherFilter = "All";


// ********************************************************************************
// Functions:

function storeSearchGenreSelectListVisibility(focusList) {
    if(focusList !== document.activeElement) {
        focusList.tabIndex = -1;
        focusList.focus();
    }
    else {
        focusList.tabIndex = -1;
        focusList.blur();
    }
}

function buildCurrentGameList() {
    var searchDictLoad = localStorage.getItem("searchStatistics");
    var searchStatisticObject = JSON.parse(searchDictLoad);

    if(searchStatisticObject == null) {
        searchStatisticObject = {
            "title": {},
            "genre": {},
            "developer": {},
            "publisher": {}
        }
    }

    storeSearchGenreSelectTitle.innerHTML = currentGenreFilter;
    storeSearchDeveloperSelectTitle.innerHTML = currentDeveloperFilter;
    storeSearchPublisherSelectTitle.innerHTML = currentPublisherFilter;

    var currentGameList = {};

    currentGameList = Object.assign({}, gameObject);
    
    if(storeSearchSearchbar != "") {
        for(var game in gameObject) {
            if(gameObject[game].title.toLowerCase().indexOf(storeSearchSearchbar.value.toLowerCase()) < 0) {
                delete currentGameList[game];
            }
        }
    }

    if(currentGenreFilter != "All") {
        for(var game in gameObject) {
            if(gameObject[game].genre.indexOf(currentGenreFilter) < 0) {
                delete currentGameList[game];
            }
        }

        if(currentGenreFilter in searchStatisticObject.genre) {
            searchStatisticObject.genre[currentGenreFilter]++;
        }
        else {
            searchStatisticObject.genre[currentGenreFilter] = 1;
        }
    }

    if(currentDeveloperFilter != "All") {
        for(var game in gameObject) {
            if(gameObject[game].developer != currentDeveloperFilter) {
                delete currentGameList[game];
            }
        }

        if(currentDeveloperFilter in searchStatisticObject.developer) {
            searchStatisticObject.developer[currentDeveloperFilter]++;
        }
        else {
            searchStatisticObject.developer[currentDeveloperFilter] = 1;
        }
    }

    if(currentPublisherFilter != "All") {
        for(var game in gameObject) {
            if(gameObject[game].publisher != currentPublisherFilter) {
                delete currentGameList[game];
            }
        }

        if(currentPublisherFilter in searchStatisticObject.publisher) {
            searchStatisticObject.publisher[currentPublisherFilter]++;
        }
        else {
            searchStatisticObject.publisher[currentPublisherFilter] = 1;
        }
    }


    // if(storeSearchSearchbar != "") {
    //     if(currentGenreFilter != "All") {
    //         for(var game in gameObject) {
    //             if((gameObject[game].title.toLowerCase().indexOf(storeSearchSearchbar.value.toLowerCase()) > -1) && (gameObject[game].genre.indexOf(currentGenreFilter) > -1)) {
    //                 currentGameList[game] = gameObject[game];
    //             }
    //         }
    //     }
    //     else {
    //         for(var game in gameObject) {
    //             if(gameObject[game].title.toLowerCase().indexOf(storeSearchSearchbar.value.toLowerCase()) > -1) {
    //                 currentGameList[game] = gameObject[game];
    //             }
    //         }
    //     }
    // }
    // else{
    //     if(currentGenreFilter != "All") {
    //         for(var game in gameObject) {
    //             if(gameObject[game].genre.indexOf(currentGenreFilter) > -1) {
    //                 currentGameList[game] = gameObject[game];
    //             }
    //         }
    //     }
    //     else {
    //         currentGameList = gameObject;
    //     }
    // }

    for(var game in currentGameList) {
        if(game in searchStatisticObject.title) {
            searchStatisticObject.title[game]++;
        }
        else {
            searchStatisticObject.title[game] = 1;
        }
    }

    var searchDictSave = JSON.stringify(searchStatisticObject);
    localStorage.setItem("searchStatistics", searchDictSave);

    populateResult(currentGameList);
}

function populateGenreFilterList() {
    var genreFilterList = [];
    var storeSearchGenreSelectListInner = 
        '<ul class="cards">\n' +
            '<li onclick="currentGenreFilter = \'All\'; buildCurrentGameList(); storeSearchGenreSelectListVisibility(storeSearchGenreSelectList);">All</li>\n';
    for(var game in gameObject) {
        for(var genre in gameObject[game].genre) {
            if(genreFilterList.indexOf(gameObject[game].genre[genre]) < 0) {
                genreFilterList.push(gameObject[game].genre[genre]);
            }
        }
    }

    genreFilterList.sort();

    for(var genre in genreFilterList) {
        if(genre == genreFilterList.length - 1) {
            storeSearchGenreSelectListInner += '<li onclick="currentGenreFilter = \'' + genreFilterList[genre] + '\'; buildCurrentGameList(); storeSearchGenreSelectListVisibility(storeSearchGenreSelectList);" style="border: none;">' + genreFilterList[genre] + '</li>\n';
        }
        else {
            storeSearchGenreSelectListInner += '<li onclick="currentGenreFilter = \'' + genreFilterList[genre] + '\'; buildCurrentGameList(); storeSearchGenreSelectListVisibility(storeSearchGenreSelectList);">' + genreFilterList[genre] + '</li>\n';
        }
    }
    storeSearchGenreSelectListInner += '</ul>';
    storeSearchGenreSelectList.innerHTML = storeSearchGenreSelectListInner;
}

function populateDeveloperFilterList() {
    var developerFilterList = [];
    var storeSearchDeveloperSelectListInner = 
        '<ul class="cards">\n' +
            '<li onclick="currentDeveloperFilter = \'All\'; buildCurrentGameList(); storeSearchGenreSelectListVisibility(storeSearchDeveloperSelectList);">All</li>\n';
    for(var game in gameObject) {
        if(developerFilterList.indexOf(gameObject[game].developer) < 0) {
            developerFilterList.push(gameObject[game].developer);
        }
    }

    developerFilterList.sort();

    for(var developer in developerFilterList) {
        if(developer == developerFilterList.length - 1) {
            storeSearchDeveloperSelectListInner += '<li onclick="currentDeveloperFilter = \'' + developerFilterList[developer] + '\'; buildCurrentGameList(); storeSearchGenreSelectListVisibility(storeSearchDeveloperSelectList);" style="border: none;">' + developerFilterList[developer] + '</li>\n';
        }
        else {
            storeSearchDeveloperSelectListInner += '<li onclick="currentDeveloperFilter = \'' + developerFilterList[developer] + '\'; buildCurrentGameList(); storeSearchGenreSelectListVisibility(storeSearchDeveloperSelectList);">' + developerFilterList[developer] + '</li>\n';
        }
    }
    storeSearchDeveloperSelectListInner +=
        '</ul>'
    storeSearchDeveloperSelectList.innerHTML = storeSearchDeveloperSelectListInner;
}

function populatePublisherFilterList() {
    var publisherFilterList = [];
    var storeSearchPublisherSelectListInner = 
        '<ul class="cards">\n' +
            '<li onclick="currentPublisherFilter = \'All\'; buildCurrentGameList(); storeSearchGenreSelectListVisibility(storeSearchPublisherSelectList);">All</li>\n';
    for(var game in gameObject) {
        if(publisherFilterList.indexOf(gameObject[game].publisher) < 0) {
            publisherFilterList.push(gameObject[game].publisher);
        }
    }

    publisherFilterList.sort();

    for(var publisher in publisherFilterList) {
        if(publisher == publisherFilterList.length - 1) {
            storeSearchPublisherSelectListInner += '<li onclick="currentPublisherFilter = \'' + publisherFilterList[publisher] + '\'; buildCurrentGameList(); storeSearchGenreSelectListVisibility(storeSearchPublisherSelectList);" style="border: none;">' + publisherFilterList[publisher] + '</li>\n';
        }
        else {
            storeSearchPublisherSelectListInner += '<li onclick="currentPublisherFilter = \'' + publisherFilterList[publisher] + '\'; buildCurrentGameList(); storeSearchGenreSelectListVisibility(storeSearchPublisherSelectList);">' + publisherFilterList[publisher] + '</li>\n';
        }
    }
    storeSearchPublisherSelectListInner +=
        '</ul>'
    storeSearchPublisherSelectList.innerHTML = storeSearchPublisherSelectListInner;
}

// ********************************************************************************
// Run sripts:

buildCurrentGameList();
populateGenreFilterList();
populateDeveloperFilterList();
populatePublisherFilterList();


storeSearchGenreSelectTitle.addEventListener("click", () => {
    storeSearchGenreSelectListVisibility(storeSearchGenreSelectList);
});

storeSearchDeveloperSelectTitle.addEventListener("click", () => {
    storeSearchGenreSelectListVisibility(storeSearchDeveloperSelectList);
});

storeSearchPublisherSelectTitle.addEventListener("click", () => {
    storeSearchGenreSelectListVisibility(storeSearchPublisherSelectList);
});

storeSearchSearchbar.addEventListener("keyup", (ev) => {
    buildCurrentGameList();
})