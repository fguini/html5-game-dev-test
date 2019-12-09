// Globals
const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const {width: w, height: h} = canvas;

// BUBBLES
// // Game setup code
// ctx.fillStyle = "#000";
// ctx.globalAlpha = 0.02;

// function loopy(t) {
//     requestAnimationFrame(loopy);

//     // Game logic code
//     ctx.save();
//     ctx.fillRect(0, 0, w, h);
//     ctx.fillStyle = "#fff";
//     ctx.globalAlpha = 1;
//     // Random circle
//     const x = Math.random() * w;
//     const y = Math.random() * h;
//     const radius = Math.random() * 20;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.restore();

// }
// requestAnimationFrame(loopy); // Start things running!

// Race with delta

// Game setup code
let dt = 0;
let last = 0;
const speed = 80;
let p1 = 0;
let p2 = 0;

function loopy(ms) {
    requestAnimationFrame(loopy);

    // Game general code
    const t = ms / 1000; // Let's work in miliseconds
    dt = t - last;
    last = t;

    // Game logic code
    // Stats
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeText(`Frame length: ${(dt * 1000).toFixed(2)} ms`, 70, 50);
    ctx.strokeText(`Total time: ${t.toFixed(2)}`, 70, 90);

    // Squares movement
    p1 += speed * dt;
    p2 += speed * (1 / 60);
    if(p1 > w) p1 -= w + 50;
    if(p2 > w) p2 -= w + 50;

    ctx.fillStyle = "#f00";
    ctx.fillRect(p1, 250, 50, 50);
    ctx.fillStyle = "#0f0";
    ctx.fillRect(p2, 350, 50, 50);
}
requestAnimationFrame(loopy); // Start things running!