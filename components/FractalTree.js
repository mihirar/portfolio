// FractalTree.js
import { Sketch } from "@p5-wrapper/react";

export const fractalTree = (p5) => {
  let angle;
  let slider;

  p5.setup = () => {
    p5.createCanvas(500, 500);
    slider = p5.createSlider(0, 2 * p5.PI, p5.PI / 4, 0.01);
    slider.position(10, p5.height);
  };

  p5.draw = () => {
    p5.background(220);
    angle = slider.value();
    p5.translate(p5.width / 2, p5.height);
    branch(100);
  };

  const branch = (len) => {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 10) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.75);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.75);
      p5.pop();
    }
  };
};
