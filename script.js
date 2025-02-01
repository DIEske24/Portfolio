function toggleContent(sectionId) {
    var section = document.getElementById(sectionId);

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        section.style.opacity = "0";
        setTimeout(() => {
            section.style.opacity = "1";
        }, 50);
    } else {
        section.style.opacity = "0";
        setTimeout(() => {
            section.style.display = "none";
        }, 500);
    }
}
