async function getCurrentTabUrl() {
    return new Promise((resolve, reject) => {
        if (typeof browser !== "undefined") { // Check if the "browser" object is available (Firefox)
            browser.tabs.query({ active: true, currentWindow: true })
                .then(tabs => resolve(tabs[0].url))
                .catch(err => reject(err));
        } else if (typeof chrome !== "undefined") {// Check if the "chrome" object is available (Chrome)
            chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
                resolve(tabs[0].url);
            });
        } else if (typeof window !== 'undefined' && window.location) { // Check if the "window" object is available (regular web app)
            resolve(window.location.href);
        } else {
            reject("No supported browser API found!");
        }
    });
}

export default getCurrentTabUrl;
