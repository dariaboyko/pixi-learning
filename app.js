const Application = PIXI.Application;
const app = new Application({
  height: innerHeight,
  width: innerWidth,
  antialias: true,
});
document.body.appendChild(app.view);
const star = new PIXI.Sprite();
star.lineStyle(12, 0x00ff38);
star.beginFill(0x0047ff, 1);
star.drawStar(1330, 640, 11, 170);
star.endFill();
star.anchor.set(0.5);
const thing = new PIXI.Graphics();
thing.x = 800 / 2;
thing.y = 600 / 2;

let count = 0;
app.ticker.add(() => {
  count += 0.1;

  thing.clear();
  thing.lineStyle(10, 0xff0000, 1);
  thing.beginFill(0xffff00, 0.5);

  thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
  thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
  thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
  thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
  thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
  thing.closePath();

  thing.rotation = count * 0.1;
  star.rotation += 0.01;
});
app.stage.addChild(star);
app.stage.addChild(thing);
