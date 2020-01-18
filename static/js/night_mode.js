// The night mode button doesn't appear correctly in firefox
// So, as a temporary fix the button would be shown only in chrome
// This file can be deleted after fixing the actual issue
$(document).ready(function() {
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    if(!isChrome) {
        var allToggleButtons = $(".toggle-container");
        var i = 0;
        while (i < allToggleButtons.length) {
            allToggleButtons[i].classList.add("hide-toggle-button");
            i++;
        }
    }
});