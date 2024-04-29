function changeBackground() {
    const containerEL = document.querySelector("#s1");
    containerEL.style.backgroundColor = "blue";
};

function goodbye() {
    const element = document.querySelector("#message");
    element.innerHTML = "Goodbye!";
};

function showDog() {
    const imageEl = document.querySelector("#animal1");
    imageEl.src = "images/dog.jpg";
}