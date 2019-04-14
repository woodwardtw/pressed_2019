let buttons = document.querySelectorAll('button');
buttons.forEach(function(button){
	button.addEventListener('click', {
  handleEvent: function (event) {
    let id = button.dataset.id;
    let style = button.dataset.style;    
    changeCss(id, style, button)
  }
});
})

function changeCss(idStem, newCss, button){
	let style = document.getElementById('style-'+idStem);
	let old = document.getElementById('style-'+idStem).innerHTML;	
	button.dataset.style = old;
	style.innerHTML = newCss;
}

let mainMenu = document.getElementById('main-menu');
let destinations = ['🏠','id','remove','add', 'plugins'];
let menuHtml = '';
destinations.forEach(function(dest){
	menuHtml = menuHtml + '<li><a href="' + dest + '.html">' + dest + '</a></li>';
})
mainMenu.innerHTML = menuHtml;