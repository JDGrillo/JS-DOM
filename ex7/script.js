// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var sectionButton = document.getElementById("section-header");

sectionButton.addEventListener("click", function () {
    sec = document.getElementById("section");
    vis = sec.style.visibility;
    vis === 'visible' ? sec.style.visibility = "hidden" : sec.style.visibility = "visible";
})