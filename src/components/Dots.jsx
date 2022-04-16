import React, { useEffect, useRef } from 'react';
import createP5 from "p5";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const Dots = ({ className = "" }) => {
  const canvas = useRef();
  const p5Canvas = useRef();
  // var seed;

  useEffect(() => {
    const Sketch = (p5) => {
      const maxVelocity = 1.5;
      const totalDots = 4;
      const dotRadius = 10;

      const dots = [];

      p5.setup = () => {
        p5.resizeCanvas(canvas.current.clientWidth, canvas.current.clientHeight);

        for (let i = 0; i < totalDots; i++) {
          dots.push({
            pos: p5.createVector(p5.random(0, p5.width), p5.random(0, p5.height)),
            vel: p5.createVector(p5.random(-maxVelocity, maxVelocity), p5.random(-maxVelocity, maxVelocity))
          });
        }
      };

      p5.draw = () => {
        p5.clear();
        p5.strokeWeight(4);

        const { width, height } = p5;

        dots.forEach((dot, i) => {
          const pos = dot.pos;
          const vel = dot.vel;
          pos.x += vel.x;
          pos.y += vel.y;

          if (pos.x > width || pos.x < 0) {
            pos.x = clamp(pos.x, 0, width);
            vel.x = -vel.x;
          }

          if (pos.y > height || pos.y < 0) {
            pos.y = clamp(pos.y, 0, height);
            vel.y = -vel.y;
          }

          p5.fill("rgb(23,48,66)");
          p5.stroke("rgb(23,48,66)");

          p5.circle(pos.x, pos.y, dotRadius);

          const nextDot = dots[i < totalDots - 1 ? i + 1 : 0];
          p5.line(pos.x, pos.y, nextDot.pos.x, nextDot.pos.y);
        });
      };

      p5.windowResized = () => {
        p5.resizeCanvas(canvas.current.clientWidth, canvas.current.clientHeight);
      };
    }

    p5Canvas.current = new createP5(Sketch, canvas.current);

    return () => {
      p5Canvas.current.remove();
    };
  }, []);

  return (
    <div ref={canvas} className={`h-full w-full ${className}`}></div>
  );
};

export default Dots;