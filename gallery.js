function showTab(name, el) {
var panels = document.getElementsByClassName(‘gallery-panel’);
for (var i = 0; i < panels.length; i++) {
panels[i].className = ‘gallery-panel’;
}
var labels = document.getElementsByClassName(‘tab-label’);
for (var j = 0; j < labels.length; j++) {
labels[j].className = ‘tab-label’;
}
document.getElementById(‘tab-’ + name).className = ‘gallery-panel active’;
el.className = ‘tab-label active’;
}
if (window.location.search.indexOf(‘submitted=true’) > -1) {
var banner = document.getElementById(‘thank-you’);
if (banner) {
banner.style.display = ‘block’;
setTimeout(function() { banner.style.display = ‘none’; }, 5000);
}
}
