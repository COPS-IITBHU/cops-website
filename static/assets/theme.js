$(document).on('click', '.sunandmoon', function(event) {
    event.preventDefault();
    $("#switch").click();
});
function toBeExecutedOnFirstLoad(){
	$(document).ready(function(){
		var d = new Date();
		var n = d.getHours();
		if (n > 6 && n < 19){
		  // If time is after 6AM or before 7PM, apply day theme to ‘body’
			document.documentElement.setAttribute('data-theme', 'light')
			window.localStorage.setItem('data-theme', 'light');
	  }
		else{
		  // Else use ‘night’ theme
			document.documentElement.setAttribute('data-theme', 'dark')
			window.localStorage.setItem('data-theme', 'dark');
			$('#switch').click();

			}
	});
}
if(localStorage.getItem('first') === null){
  toBeExecutedOnFirstLoad();
  localStorage.setItem('first','nope!');
}

var checkbox = document.querySelector('input[name=theme]');

var theme = window.localStorage.getItem('data-theme');
if(theme) document.documentElement.setAttribute('data-theme', theme);
checkbox.checked = theme == 'dark' ? true : false;

checkbox.addEventListener('change', function () {
  if(this.checked){
		trans()
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('data-theme', 'dark');
  } else {
		trans()
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('data-theme', 'light');
}
});
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
