import React, { useEffect, useRef } from 'react';
import createP5 from "p5";

const Dots = () => {
  const canvas = useRef();
  const p5Canvas = useRef();

  useEffect(() => {
    const Sketch = (p5) => {
      const maxSpeed = 3;
      const totalDots = 5;
      const dots = [];
      const velocities = [];

      console.log(p5);

      p5.setup = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);

        //Initialize the dots
        if (dots[0] == null) {
          for (let i = 0; i < totalDots; i++) {
            if (dots[i] == null) {
              dots[i] = p5.createVector(p5.random(0, p5.width), p5.random(0, p5.height));
              velocities[i] = p5.createVector(p5.random(-maxSpeed, maxSpeed), p5.random(-maxSpeed, maxSpeed));
            }
          }
        }

      };

      p5.draw = () => {
        p5.clear();
        p5.fill('rgb(23,48,66)');
        p5.stroke('rgb(23,48,66)');
        p5.strokeWeight(4);

        for (let i = 0; i < totalDots; i++) {
          dots[i].x += velocities[i].x;
          dots[i].y += velocities[i].y;

          //check for collisions
          if (dots[i].x > p5.width || dots[i].x < 0) {
            velocities[i].x = -velocities[i].x;
          }

          if (dots[i].y > p5.height || dots[i].y < 0) {
            velocities[i].y = -velocities[i].y;
          }

          //Check if the point is still in the canvas
          if (dots[i].x > p5.width + 10) {
            dots[i].x = p5.width;
          }
          if (dots[i].x < -10) {
            dots[i].x = 0;
          }
          if (dots[i].y > p5.height + 10) {
            dots[i].y = p5.height;
          }
          if (dots[i].y < -10) {
            dots[i].y = 0;
          }

          //draw the lines and circles
          p5.circle(dots[i].x, dots[i].y, 10);
          if (i < totalDots - 1) {
            p5.line(dots[i].x, dots[i].y, dots[i + 1].x, dots[i + 1].y);
          } else {
            p5.line(dots[i].x, dots[i].y, dots[0].x, dots[0].y);
          }
        }
      };

      p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
      };
    };

    p5Canvas.current = new createP5(Sketch, canvas.current);

    return () => {
      p5Canvas.current.remove();
    };
  }, []);

  return (
    <div ref={canvas} className="h-full w-full">

    </div>
  );
};

export default Dots;