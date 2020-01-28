// The night mode button doesn't appear correctly in firefox
// So, as a temporary fix the button should not be shown in firefox
// This file can be deleted after fixing the actual issue
$(document).ready(function() {
    if(navigator.userAgent.indexOf("Firefox") != -1) {
        var allToggleButtons = $(".toggle-container");
        var i = 0;
        while (i < allToggleButtons.length) {
            allToggleButtons[parseInt(i, 10)].classList.add("hide-toggle-button");
            i++;
        }
    }
});