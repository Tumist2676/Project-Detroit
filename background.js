
function onRequest(info, tab) {
	var selection = info.selectionText;
//do something with the selection
if(selection){
	var searchurl = 'https://google.com/search?q=' + encodeURIComponent(selection);
	chrome.tabs.create({url: searchurl});
}
};

chrome.contextMenus.create({
	id: "bing_search",
	contexts: ["selection"],
	title: "Search with Google",
	"onclick" : onRequest
});
