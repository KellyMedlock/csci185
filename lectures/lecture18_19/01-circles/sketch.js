function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    let circleNum = 0;
    let y = -50;
    let size = 0;

    noFill();

    while (y < canvasHeight + 300) {
        circle(canvasWidth / 2, y, size);
        circle(canvasWidth * .33, y, size);
        circle(canvasWidth * .66, y, size);
        y += 5;
        size += 2;
        // circleNum++; // always increment the counter
    };

    // fill('red');
    // noFill();
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
