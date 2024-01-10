for (let i = 1; i <= 4; i++) {
  document
    .getElementById(`link${i}`)
    .addEventListener("mouseover", function () {
      var slider = document.getElementById(`slider${i}`);
      slider.style.width = "100%";
    });

  document.getElementById(`link${i}`).addEventListener("mouseout", function () {
    var slider = document.getElementById(`slider${i}`);
    slider.style.width = "0%";
  });
}

let panelFlag = false;
const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

document.getElementById("hamburger").addEventListener("click", function () {
  switchPanel();
});

document.body.addEventListener("click", function(event) {
  if(event.target.tagName.toLowerCase() === 'a') {
    const targetId = event.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if(targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView();
    }
  }
});

function switchPanel(){
  if (!panelFlag) {
    document.getElementById("panel").style.transform = "translateX(-35%)";
    document.querySelector("#hamburger").style.backgroundColor = "black";
    document.querySelectorAll("rect").forEach(function (rect) {
      rect.style.fill = "white";
    });
    document.getElementById("ham-menu").style.display = "none";
    document.getElementById("cross").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    panelFlag = true;
  } else {
    document.getElementById("panel").style.transform = "translateX(80%)";
    document.querySelector("#hamburger").style.backgroundColor = "white";
    document.querySelectorAll("rect").forEach(function (rect) {
      rect.style.fill = "#000";
    });
    document.getElementById("ham-menu").style.display = "block";
    document.getElementById("cross").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    panelFlag = false;
  }
}
document.getElementById("overlay").addEventListener("click",()=>{
  switchPanel();
});