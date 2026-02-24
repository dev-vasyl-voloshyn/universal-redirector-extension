const input = document.getElementById('redirectBase');
const status = document.getElementById('status');

chrome.storage.sync.get(['redirectBase'], r => {
    input.value = r.redirectBase || DEFAULT_REDIRECT;
});

document.getElementById('save')
.addEventListener('click', () => {

    chrome.storage.sync.set({
        redirectBase: input.value.trim()
    }, () => {
        status.textContent = "Saved!";
        setTimeout(() => status.textContent = '', 1000);
    });

});
