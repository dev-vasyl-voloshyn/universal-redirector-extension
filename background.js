importScripts("config.js");

function getRedirectBase() {
    return new Promise(resolve => {
        chrome.storage.sync.get(
            ["redirectBase"],
            r => resolve(r.redirectBase || DEFAULT_REDIRECT)
        );
    });
}

chrome.action.onClicked.addListener(async (tab) => {
    if (!tab.url || tab.url.startsWith("chrome://") || tab.url.startsWith("chrome-extension://")) {
        chrome.action.setBadgeText({ text: "✕", tabId: tab.id });
        chrome.action.setBadgeBackgroundColor({ color: "#D93025", tabId: tab.id });
        setTimeout(() => chrome.action.setBadgeText({ text: "", tabId: tab.id }), 1500);
        return;
    }

    const base = await getRedirectBase();
    const encoded = btoa(encodeURIComponent(tab.url));

    chrome.tabs.create({ url: base + encodeURIComponent(encoded), active: true })
        .catch(() => {
            chrome.action.setBadgeText({ text: "!", tabId: tab.id });
            chrome.action.setBadgeBackgroundColor({ color: "#D93025", tabId: tab.id });
            setTimeout(() => chrome.action.setBadgeText({ text: "", tabId: tab.id }), 1500);
        });
});