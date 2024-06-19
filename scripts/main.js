// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world" 

// let myVariable;
// myVariable = "Bob";

// let iceCream = "Milk";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }
//   document.querySelector("img").addEventListener("click", () => {
//     alert("Welcome to world of unlimited possibility");
//   });

const myImage = document.querySelector('img');

myImage.onclick = () => {const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/google-icon.png')
    }else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
    };

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome to Mozilla Mr/Ms ${myName}, Mozilla is cool`;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else{
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Welcome to Mozilla Mr/Ms  ${storedName}, Mozilla is cool`;
}

myButton.onclick = () => {
    setUserName();
}

