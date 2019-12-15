import moro from '../moro';
const {Container, Controls, Entities} = moro;
const {CanvasRenderer} = moro.Renderers;
const {Sprite, Texture} = Entities;

// Game setup
const {w, h} = {w: 800, h: 600};
const renderer = new CanvasRenderer(w, h);
document.querySelector("#board").appendChild(renderer.view);
const scene = new Container();
const controls = new Controls.KeyControl();

// Main loop
let dt = 0;
let last = 0;
function loopy(ms) {
    requestAnimationFrame(loopy);
    const t = ms / 1000;
    dt = t - last;
    last = t;
    scene.update(dt, t);
    renderer.render(scene);
}
requestAnimationFrame(loopy);

// Game logic
const texture = new Texture("res/images/spaceship.png");
for(let i = 0; i < 50; i++) {
    const speed = Math.random() * 150 + 50;
    const ship = new Sprite(texture);
    ship.pos.x = Math.random() * w;
    ship.pos.y = Math.random() * h;
    ship.update = function(dt) {
        this.pos.y += speed * dt;
        if(this.pos.y > h) {
            this.pos.y = -32;
        }
    };
    scene.add(ship);
}