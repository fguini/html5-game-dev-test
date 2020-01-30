import {Container, Controls, Entities, Game, math} from '../moro/index.js';
import {Squizz} from './objects';
const {Texture} = Entities;

const game = new Game(640, 320);
const {scene, w, h} = game;
const controls = new Controls.KeyControl();

for(let i = 100; i--;) {
    const squizz = scene.add(new Squizz(controls, i));
    squizz.pos = {
        x: math.rand(w),
        y: math.rand(h)
    };
}

game.run((dt, t) => {});
