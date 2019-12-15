import BaseEntity from './BaseEntity';

class Sprite extends BaseEntity {
    constructor(texture) {
        super();
        this.texture = texture;
    }
}

export default Sprite;