function toggleContent(className, button) {
    var content = document.querySelectorAll('.' + className);
    content.forEach(function(element) {
        if (element.style.display === "none") {
            element.style.display = "block";
            button.textContent = "Show Less";
        } else {
            element.style.display = "none";
            button.textContent = "Show More";
        }
    });
}