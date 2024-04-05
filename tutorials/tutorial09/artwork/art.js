const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#00D3E095", "#E0C10085", "#E1018D75", "#305E6165"];
const colors2 = ["#00D3E065", "#E0C10055", "#E1018D45", "#305E6135"];

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(1); // how many redraws per second

    fill("#08415c00");
    strokeWeight(0);

    // generate a random x-position, y-position, and size:
    

    // Draw a random circle:
    let counter = 0;
    while (counter < 5000) {
        let color = colors[randomInt(0, 3)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        circle(x, y, size);
        counter++;
    }

    counter = 0;
    while (counter < 250) {
        let color = colors2[randomInt(0, 3)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        square(x, y, size);
        counter++;
    }
    
    // counter = 0;
    // fill('#99415c10');
    // while (counter < 5000) {
    //     let x = randomInt(0, canvasWidth);
    //     let y = randomInt(0, canvasHeight);
    //     let size = randomInt(25, 125);
    //     circle(x, y, size);
    //     counter++;
    // }

    // counter = 0;
    // fill('#08020505');
    // while (counter < 5000) {
    //     let x = randomInt(0, canvasWidth);
    //     let y = randomInt(0, canvasHeight);
    //     let size = randomInt(25, 125);
    //     circle(x, y, size);
    //     counter++;
    // }

    // counter = 0;
    // fill('#ef578910');
    // while (counter < 1250) {
    //     let x = randomInt(canvasWidth/2, canvasWidth);
    //     let y = randomInt(canvasHeight/2, canvasHeight);
    //     let size = randomInt(25, 125);
    //     circle(x, y, size);
    //     counter++;
    // }
}

/***********************************+*
 * ANIMATION LOOP
 * Anything that you want to animate
 * goes in the draw() function
 * *********************************
 */
function draw() {
    clear();
    let counter = 0;
    while (counter < 5000) {
        let color = colors[randomInt(0, 3)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        circle(x, y, size);
        counter++;
    }

    counter = 0;
    while (counter < 250) {
        let color = colors2[randomInt(0, 3)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        square(x, y, size);
        counter++;
    }
    // clear();

    // generate a random x-position, y-position, and size:
    // let x = randomInt(0, canvasWidth);
    // let y = randomInt(0, canvasHeight);
    // let size = randomFloat(25, 125);

    // draw a random circle each time the program animates:
    // circle(x, y, size);
}
