chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo && (changeInfo.status == "complete")) {
        var current = tab.url;
        console.log(current);
        if (current.match(/isitchristmas\.com/)) {
            chrome.browserAction.setIcon({"path":"yes.png"});
            chrome.browserAction.setTitle({"title":"This is isitchristmas.com"});
        } else {
            chrome.browserAction.setIcon({"path":"no.png"});
            chrome.browserAction.setTitle({"title":"This is not isitchristmas.com"});
        }
    }
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
    console.log(activeInfo);
    //chrome.tabs.getCurrent(function() {
    chrome.tabs.query({"active":true}, function(tabs) {
        var current = tabs[0].url;
        if (current.match(/isitchristmas\.com/)) {
            chrome.browserAction.setIcon({"path":"yes.png"});
            chrome.browserAction.setTitle({"title":"This is isitchristmas.com"});
        } else {
            chrome.browserAction.setIcon({"path":"no.png"});
            chrome.browserAction.setTitle({"title":"This is not isitchristmas.com"});
        }
    })
    //});
});
