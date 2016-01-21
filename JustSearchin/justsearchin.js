function onClickHandler(info, tab) {
  var searchTerm = info.selectionText;

  var url = "https://www.google.com.au#q=" + searchTerm

  chrome.windows.create({"url": url, "incognito": true});
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "just searchin..", "contexts": ["selection"], "id": "search"});
});
