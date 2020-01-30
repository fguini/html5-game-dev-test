import {Entities, math} from '../../moro';
const {Texture, TileSprite} = Entities;
const texture = new Texture('res/images/player-walk.png');

class Squizz extends TileSprite {
    constructor(controls, id) {
        super(texture, 32, 32);
        this.id = id;
        this.anchor = {x: -16, y: -16};
        this.controls = controls;
        // movement variables
        this.speed = math.randf(0.9, 1.2);
        initializeAnimations(this);
    }

    update(dt, t) {
        super.update(dt);

        const {animations, controls, pos, scale, speed} = this;
        const oldX = pos.x;
        const {x} = controls;
        pos.x += x * dt * 100 * speed;

        // Set correct animation depending on controls
        if(x) {
            animations.play("walk");
            // Flip to correct direction
            scale.x = Math.sign(x);
        } else
            animations.play("idle");
    }
}

function initializeAnimations(squizz) {
    const speed = squizz.speed;
    squizz.animations.add(
        'walk',
        [0, 1, 2, 3].map(x => ({x, y: 0})),
        0.07 * speed
    );
    squizz.animations.add(
        'idle',
        [{x: 0, y: 0}, {x: 4, y: 0}, {x: 4, y: 1}, {x: 4, y: 0}],
        0.15 * speed
    );
    squizz.animations.play('walk');
}

export default Squizz;