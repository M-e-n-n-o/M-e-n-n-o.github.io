let canvas;

const maxSpeed = 3;

const totalDots = 5;
const dots = [];
const velocities = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '0')

    //Initialize the dots
    if (dots[0] == null) {
        for (let i = 0; i < totalDots; i++) {
            if (dots[i] == null) {
                dots[i] = createVector(random(0, width), random(0, height));
                velocities[i] = createVector(random(-maxSpeed, maxSpeed), random(-maxSpeed, maxSpeed))
            }
        }
    }
}

function windowResized() {
    canvas = resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
    fill('rgb(23,48,66)');
    stroke('rgb(23,48,66)');
    strokeWeight(4);

    for (let i = 0; i < totalDots; i++) {
        dots[i].x += velocities[i].x;
        dots[i].y += velocities[i].y;

        //check for collisions
        if (dots[i].x > width || dots[i].x < 0) {
            velocities[i].x = -velocities[i].x;
        }

        if (dots[i].y > height || dots[i].y < 0) {
            velocities[i].y = -velocities[i].y;
        }

        //Check if the point is still in the canvas
        if (dots[i].x > width + 10) {
            dots[i].x = width;
        }
        if (dots[i].x < -10) {
            dots[i].x = 0;
        }
        if (dots[i].y > height + 10) {
            dots[i].y = height;
        }
        if (dots[i].y < -10) {
            dots[i].y = 0;
        }

        //draw the lines and circles
        circle(dots[i].x, dots[i].y, 10);
        if (i < totalDots - 1) {
            line(dots[i].x, dots[i].y, dots[i + 1].x, dots[i + 1].y);
        } else {
            line(dots[i].x, dots[i].y, dots[0].x, dots[0].y);
        }
    }
}