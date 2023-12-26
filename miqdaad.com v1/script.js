function openInNewTab(event) {
    event.preventDefault();
    window.open(event.currentTarget.href, '_blank');
}

var links = document.querySelectorAll("a[href]");
links.forEach(function(link) {
    link.addEventListener("click", openInNewTab);
});
