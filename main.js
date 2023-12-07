//image switcher code

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "image/firefox2.png") {
    myImage.setAttribute("src", "image/123.png");
  } else {
    myImage.setAttribute("src", "image/firefox2.png");
  }
};

//welcome massage code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome to Mozilla, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to Mozilla, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to Mozilla, ${myName}`;
  }
}

