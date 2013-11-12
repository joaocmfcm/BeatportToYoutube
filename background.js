chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "jquery-1.10.2.min.js"});
	chrome.tabs.executeScript(null, {file: "content.js"});
});
