function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    fill("yellow");
    noStroke();
    circle(900, 450, 250);
    
    fill('black');
    stroke('black')
    circle(850, 410, 55);

    fill('black');
    circle(950, 410, 55);

    fill('black');
    arc(900, 490, 125, 95, 0, PI);

    // https://p5js.org/reference/#/p5/rect

    // https://p5js.org/reference/#/p5/circle
    
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    // drawGrid(canvasWidth, canvasHeight)
}