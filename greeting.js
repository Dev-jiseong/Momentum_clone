const form = document.querySelector(".js-form");
const input = form.querySelector("input");

const greeting = document.querySelector(".js-greeting");

function setLocalName(userName) {
    localStorage.setItem("userName", userName);
}

function handleSubmit(event) {
    const userName = input.value;
    setLocalName(userName);
}

function setUserName() {
    form.addEventListener("submit", handleSubmit);
}

function printGreeting() {
    form.classList.remove("showing");
    greeting.innerText = `Hello ${localStorage.getItem("userName")}`
}

function init() {
    const userName = localStorage.getItem("userName");
    if(userName === null) {
        form.classList.add("showing");
        setUserName();
    } else {
        printGreeting();
    }
}

init();