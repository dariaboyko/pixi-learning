const Application = PIXI.Application;
const app = new Application({
  height: innerHeight,
  width: innerWidth,
});
document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;
