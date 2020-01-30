import Sprite from './Sprite';
import {AnimationManager} from '../../animations';

class TileSprite extends Sprite {
    constructor(texture, w, h) {
        super(texture);
        this.tileW = w;
        this.tileH = h;
        this.frame = {x: 0, y: 0};
        this.animations = new AnimationManager(this);
    }

    update(dt) {
        this.animations.update(dt);
    }

    get w() {
        return this.tileW * Math.abs(this.scale.x);
    }

    get h() {
        return this.tileH * Math.abs(this.scale.y);
    }
}

export default TileSprite;