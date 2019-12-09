// // Globals
// const canvas = document.querySelector("#board canvas");
// const ctx = canvas.getContext("2d");
// console.log(ctx.canvas);

// // Style
// ctx.strokeStyle = "black";
// ctx.fillStyle = "red"

// // Rectangle
// ctx.fillRect(300, 200, 50, 50);
// ctx.strokeRect(300, 200, 50, 50);

// // Circle
// ctx.beginPath();
// ctx.arc(325, 170, 25, 0, Math.PI * 2, false);
// ctx.fill();
// ctx.stroke();

// Globals
const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const {width: w, height: h} = canvas;
// Background black
// ctx.fillStyle = "black";
// ctx.fillRect(0, 0, w, h);
// ctx.fillStyle = "#555";
// Draw lines over the mask

// Starfield!
ctx.fillStyle = "#444";
let x, y, radius;
for(let i = 0; i < 550; i++) {
    x = Math.random() * w;
    y = Math.random() * h;
    radius = Math.random() * 3;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
}
ctx.translate(319, 188);

// Text
// ctx.font = "20pt courier";
// const center = w / 2;
// ctx.textAlign = "center";
// for(let i = 0; i < 11; i++) {
//     ctx.fillText("if you're in the game", center, i * 40);
// }
// ctx.strokeText("strokes the word", center, h - 30);

// Images
// const img = new Image();
// img.src = "res/images/rick.png";
// img.addEventListener("load", draw, false);
// const img = new Image();
// img.src = "res/images/snowflake.png";
// img.addEventListener("load", draw, false);

// function draw() {
//     for(let i = 0; i < 100; i++) {
//         let x = Math.random() * w;
//         let y = Math.random() * h;
//         let scale = Math.random();

//         let {width, height} = img;

//         ctx.drawImage(img, x, y, width * scale, height * scale);
//     }
// }

// // Draw the original
// function draw() {
//     ctx.drawImage(img, 170, 140);
//     // Draw cropped images
//     for(let i = 0; i < 22; i++) {
//         ctx.drawImage(
//             img,
//             // source
//             32, 0, 53, 75,
//             // destination location
//             i * 20, i * 10,
//             // destination scale
//             i * 0.2 * 53, i * 0.2 * 75
//         );
//     }
// }

// Transformations
// function draw() {
//     for(let i = 0; i < 100; i++) {
//         const x = Math.random() * w;
//         const y = Math.random() * h;
//         ctx.fillRect(x, y, 50, 50);
//     }
// }

// ctx.fillStyle = "black";
// draw();
// ctx.save();
// ctx.fillStyle = "red";
// draw();
// ctx.restore();
// // Back in black!
// draw();
// ctx.translate(w / 2, h / 2);
// for(let ring = 1; ring < 180; ring++) {
//     ctx.fillStyle = `hsl(${ring * 25}, 90%, 50%)`;
//     for(let dots = 0; dots < ring * 6; dots++) {
//         ctx.rotate((Math.PI * 2) / (ring * 6));
//         ctx.beginPath();
//         ctx.arc(0, ring * 15, 7, 0, Math.PI * 2, true);
//         ctx.fill();
//     }
// }


// COMPANY LOGO
// Draw the words as a mask
ctx.font = "bold 70pt monospace";
ctx.fillStyle = "black";
ctx.fillText("MORO", 10, 60);
ctx.fillText("SAURIO", 10, 118);

// Draw lines over the mask
ctx.globalCompositeOperation = "source-atop";

// Rainbow!
for(let i = 0; i < 6; i++) {
    ctx.fillStyle = `hsl(${i * (250 / 6)}, 90%, 55%)`;
    ctx.fillRect(0, i * 20, 400, 50);
}

// Draw the shadow behind the logo
ctx.fillStyle = "#999";
ctx.globalCompositeOperation = "destination-over";
ctx.fillText("MORO", 13, 62);
ctx.fillText("SAURIO", 13, 120);
ctx.font = "30pt monospace";

// Back to default
ctx.globalCompositeOperation = "source-over";

// Add characters (so they are evenly spaced)
"games".split("").forEach((ch, i) => {
    ctx.fillText(ch, i * 37 + 12, 145);
});