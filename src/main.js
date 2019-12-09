import KeyControl from '../lib/KeyControl';
import MouseControl from '../lib/MouseControl';

// Globals
const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const {width: w, height: h} = canvas;

// Game setup code
let x = w / 2;
let y = h / 2;
let color = 0;
const controls = new KeyControl();
const mouse = new MouseControl(canvas);

function loopy(ms) {
    requestAnimationFrame(loopy);

    // Game logic code
    const x = mouse.pos.x;
    const y = mouse.pos.y;
    if(mouse.isDown) {
        color += 10;
        if(color > 360) {
            color -= 360;
        }
    }
    // Draw the rectangle
    ctx.fillStyle = `hsl(${color}, 50%, 50%)`;
    ctx.fillRect(x, y, 50, 50);
    // Don't forget to update at the end!
    mouse.update();
}
requestAnimationFrame(loopy); // Start things running!