import React, { useEffect, useRef } from 'react';
import createP5 from "p5";

const Tree = ({ className = "" }) => {
    const canvas = useRef();
    const p5Canvas = useRef();
    var seed;

    useEffect(() => {
        const Sketch = (p5) => {
            p5.setup = () => {
                p5.resizeCanvas(canvas.current.clientWidth, canvas.current.clientHeight);

                seed = p5.random(0, 1000);
                p5.angleMode(p5.DEGREES);
                p5.noLoop();
            };

            function branch(length) {
                p5.push();

                if (length > 10) {
                    p5.randomSeed(seed);

                    p5.strokeWeight(p5.map(length, 10, 100, 1, 15));
                    p5.stroke(70, 40, 20);
                    p5.line(0, 0, 0, -length);

                    p5.translate(0, -length);
                    p5.rotate(p5.random(-20, -30));
                    branch(length * p5.random(0.7, 0.9));
                    p5.rotate(p5.random(50, 60));
                    branch(length * p5.random(0.7, 0.9));
                } else {
                    p5.randomSeed(seed * length);
                    var r = 80 + p5.random(-20, 20);
                    var g = 120 + p5.random(-20, 20);
                    var b = 40 + p5.random(-20, 20);

                    p5.fill(r, g, b);
                    p5.noStroke();
                    p5.ellipse(0, 0, 10);
                }

                p5.pop();
            }

            p5.draw = () => {
                p5.clear();
                p5.strokeWeight(4);

                const { width, height } = p5;

                p5.translate(width - (width / 3), height);

                const aspect = width / height;

                p5.scale(2 * aspect, 2 * aspect);
                branch(25);
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

export default Tree;