chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      chrome.action.setPopup({ tabId: tabId, popup: "popup.html" });
    } else {
      chrome.action.setPopup({ tabId: tabId, popup: "not_youtube.html" });
    }
  }
});
