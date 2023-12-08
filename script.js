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
  
  document.getElementById("hamburger").addEventListener("click", function () {
    if (!panelFlag) {
      document.getElementById("panel").style.transform = "translateX(-35%)";
      document.querySelector("#hamburger").style.backgroundColor = "black";
      document.querySelectorAll("rect").forEach(function (rect) {
        rect.style.fill = "white";
      });
      document.getElementById("overlay").style.display = "block";
      panelFlag = true;
    } else {
      document.getElementById("panel").style.transform = "translateX(80%)";
      document.querySelector("#hamburger").style.backgroundColor = "white";
      document.querySelectorAll("rect").forEach(function (rect) {
        rect.style.fill = "#000";
      });
      document.getElementById("overlay").style.display = "none";
      panelFlag = false;
    }
  });
  