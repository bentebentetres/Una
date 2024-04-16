function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    }

function animateNavigation() {
        var nav = document.querySelector("nav");
        nav.classList.add("animate-nav");
        
        setTimeout(function() {
            nav.classList.remove("animate-nav");
        }, 2000);
    
function randomizeBackgroundColor(element) {
            var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random color
            element.style.backgroundColor = randomColor;
}
        
function resetBackgroundColor(element) {
            element.style.backgroundColor = ""; 
}
        