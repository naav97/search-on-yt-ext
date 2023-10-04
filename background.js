chrome.contextMenus.create({
  id: "search",
  title: "Search for '%s'",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText);
    const searchUrl = `https://www.youtube.com/results?search_query=${query}`; // Replace with your preferred search engine URL
    chrome.tabs.create({ url: searchUrl });
  }
});
