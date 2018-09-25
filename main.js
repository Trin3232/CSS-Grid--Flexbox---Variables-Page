// Changing CSS Variables Colors

var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var grey = rootStyles.getPropertyValue('--grey');

root.style.setProperty('--grey', '#ff9100');
