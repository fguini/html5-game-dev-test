import moro from '../moro';
const {Container, Controls, Entities} = moro;
const {CanvasRenderer} = moro.Renderers;
const {Sprite, Text, Texture} = Entities;

// Game setup
const w = 640;
const h = 300;
const renderer = new CanvasRenderer(w, h);
document.querySelector('#board').appendChild(renderer.view);

// Main loop
let dt = 0;
let last = 0;
let lastShot = 0;
let lastSpawn = 0;
let spawnSpeed = 1.0;
let scoreAmount = 0;
let gameOver = false;
let sceneLen = 0;
function loopy(ms) {
    requestAnimationFrame(loopy);
    const t = ms / 1000;
    dt = t - last;
    last = t;

    // Fire
    if(!gameOver && controls.action && t - lastShot > 0.15) {
        lastShot = t;
        fire(ship.pos.x + 12, ship.pos.y + 10);
    }

    // Spawn bad guys
    if(t - lastSpawn > spawnSpeed) {
        lastSpawn = t;
        const speed = -50 - (Math.random() * Math.random() * 100);
        const position = Math.random() * (h / 2 - 16);
        spawnEnemy(w, position, speed);
        // Accelerating for the next spawn
        spawnSpeed = spawnSpeed < 0.05 ? 0.6 : spawnSpeed * 0.97 + 0.001;
    }

    scene.update(dt, t);
    renderer.render(scene);
}
requestAnimationFrame(loopy);

// Game objects
const scene = new Container();
const controls = new Controls.KeyControl();
const textures = {
    background: new Texture('res/images/bg.png'),
    bullet: new Texture('res/images/bullet.png'),
    enemy: new Texture('res/images/baddie.png'),
    spaceship: new Texture('res/images/spaceship.png'),
};
const ship = new Sprite(textures.spaceship);
ship.pos.x =  10;
ship.pos.y = h / 4;
ship.update = function(dt, t) {
    const {pos} = this;
    pos.x += controls.x * dt * 200;
    pos.y += controls.y * dt * 200;

    if(pos.x < 0) pos.x = 0;
    if(pos.x > (w / 2 - 16)) pos.x = (w / 2 - 16);
    if(pos.y < 0) pos.y = 0;
    if(pos.y > (h / 2 - 16)) pos.y = (h / 2 - 16);
};

// Bullets
const bullets = new Container();
function fire(x, y) {
    const bullet = new Sprite(textures.bullet);
    bullet.pos.x = x;
    bullet.pos.y = y;
    bullet.update = function(dt) {
        this.pos.x += dt * 400;
        if(this.pos.x > w - 20)
            bullet.dead = true;
        if(!this.dead) {
            for(let enemy of enemies.children) {
                const dx = enemy.pos.x + 16 - (bullet.pos.x + 8);
                const dy = enemy.pos.y + 16 - (bullet.pos.y + 8);
                if(Math.sqrt(dx * dx + dy * dy) < 24) {
                    enemy.dead = true;
                    bullet.dead = true;
                    handleScore(5);
                }
            }
        }
    };
    bullets.add(bullet);
}

// Bad Guys
const enemies = new Container();
function spawnEnemy(x, y, speed) {
    const enemy = new Sprite(textures.enemy);
    enemy.pos.x = x;
    enemy.pos.y = y;
    enemy.update = function(dt) {
        this.pos.x += speed * dt;
        if(this.pos.x < -32) {
            this.dead = true;
            handleScore(-1);
        }
        if(!this.dead) {
            const dx = enemy.pos.x + 16 - (ship.pos.x + 8);
            const dy = enemy.pos.y + 16 - (ship.pos.y + 8);
            if(Math.sqrt(dx * dx + dy * dy) < 24)
                handleScore(scoreAmount * -1);
        }
    };
    enemies.add(enemy);
}

// Add the score game object
const score = new Text('score:', {
    font: '20px sans-serif',
    fill: '#8B8994',
    align: 'center'
});
score.pos.x = w / 2;
score.pos.y = h - 30;
score.update = function() {
    score.text = `score: ${scoreAmount}`;
};

function handleScore(points = 0) {
    let toScore = scoreAmount + points;
    if(toScore <= 0 && !gameOver)
        triggerGameOver();
    else
        scoreAmount = toScore;
}

// Game Over
function triggerGameOver() {
    const gameOverMessage = new Text("GAME OVER!", {
        font: '100px sans-serif',
        fill: '#FA6780',
        align: 'center'
    });
    gameOverMessage.pos.x = w / 4;
    gameOverMessage.pos.y = h / 4 - 50;
    scene.add(gameOverMessage);
    ship.dead = true;
    gameOver = true;
}

// Add everything to the scene container
scene.add(new Sprite(textures.background));
scene.add(ship);
scene.add(bullets);
scene.add(enemies);
scene.add(score);