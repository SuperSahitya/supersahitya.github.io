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

window.addEventListener("scroll", function () {
  if (panelFlag) {
    switchPanel();
  }
});

document.body.addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() === "a") {
    const targetId = event.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
});

function switchPanel() {
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
    animatePanelLinks();
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

document.getElementById("overlay").addEventListener("click", () => {
  switchPanel();
});

const cursor = document.getElementById("cursor");
cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.opacity = 0;
document.addEventListener("mousemove", (e) => {
  let cursorWidth = document.getElementById("cursor").style.width;
  cursor.style.opacity = "1";
  let xAxis = e.clientX;
  let yAxis = e.clientY;
  let shift = Number(cursorWidth.slice(0, -2)) * 0.5;
  cursor.style.transform = `translate(${xAxis - shift}px, ${yAxis - shift}px)`;
});

document.querySelectorAll(".links").forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.style.width = 0;
    cursor.style.height = 0;
  });
  link.addEventListener("mouseout", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
  });
});

function increaseCursorSize(link, size) {
  link.addEventListener("mouseover", () => {
    cursor.style.height = `${size}px`;
    cursor.style.width = `${size}px`;
  });
  link.addEventListener("mouseout", () => {
    cursor.style.height = "30px";
    cursor.style.width = "30px";
  });
}
const logo = document.getElementById("logo");
increaseCursorSize(logo, 100);

document.addEventListener("mouseout", () => {
  cursor.style.opacity = 0;
});

const homeContainer = document.getElementById("home-text");
homeContainer.addEventListener("mouseover", () => {
  increaseCursorSize(homeContainer, 150);
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const myName = document.getElementById("name");

function generateRandomLetters() {
  let iteration = 0;
  const interval = setInterval(() => {
    myName.innerText = myName.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return myName.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iteration >= myName.dataset.value.length) {
      clearInterval(interval);
    }
    iteration += 1 / 8;
  }, 30);
}

generateRandomLetters();

let tl = gsap.timeline();

tl.from(".links", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  ease: "elastic.out(0.8, 0.3)",
});

gsap.from(".skill-box", {
  scrollTrigger: "#skills",
  y: -20,
  opacity: 0,
  duration: 0.2,
  stagger: 0.1,
  // ease: "elastic.out(0.8, 0.3)"
});

let projectElements = document.querySelectorAll(".project");
let projectCount = projectElements.length;

gsap.to(".project", {
  xPercent: -100 * (projectCount - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#projects",
    pin: true,
    endTrigger: "#project3",
    end: "right",
    scrub: 1,
    snap: {
      snapTo: (value) => {
        let closest =
          Math.round(value * (projectCount - 1)) / (projectCount - 1);
        return closest;
      },
      duration: { min: 0.2, max: 0.3 },
      ease: "power1.inOut",
    },
    end: () => "+=" + document.querySelector("#projects").offsetWidth,
  },
});

function animatePanelLinks() {
  gsap.from(".panel-links", {
    y: -40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
    // ease: "elastic.out(0.8, 0.3)"
  });
}
