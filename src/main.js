import moro from '../moro';
const {Container, Controls, Entities} = moro;
const {CanvasRenderer} = moro.Renderers;

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

// Example game element to manipulate
const message = new Entities.Text("The renderer!", {
    font: '40pt monospace',
    fill: 'blue',
    align: 'center'
});
message.pos.x = w / 2;
message.pos.y = h / 2;
message.update = function(dt) {
    this.pos.x -= 300 * dt;
    if(this.pos.x < -220)
        this.pos.x = w + 200;
};
scene.add(message);
renderer.render(scene);