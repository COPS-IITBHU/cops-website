$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6){
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
    document.documentElement.setAttribute('data-theme', 'dark')
    $('#switch').click();

  }
	else
	  // Else use ‘day’ theme

    document.documentElement.setAttribute('data-theme', 'light')

});

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
