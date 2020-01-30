import Animation from './Animation';

class AnimationManager {
    constructor(entity) {
        this.animations = {};
        this.current = null;
        this.frameSource = entity.frame || entity;
        this.running = false;
    }

    add(name, frames, speed) {
        this.animations[name] = new Animation(frames, speed);
        return this.animations[name];
    }

    update(dt) {
        const {current, frameSource} = this;
        if(!current || !this.running)
            return;
        current.update(dt);
        frameSource.x = current.frame.x;
        frameSource.y = current.frame.y;
    }

    play(name) {
        const {animations, current} = this;
        this.running = true;

        if(animations[name] === current)
            return;

        this.current = animations[name];
        this.current.reset();
    }

    pause() {
        this.running = false;
    }

    stop() {
        this.current.reset();
        this.current = null;
        this.running = false;
    }
}

export default AnimationManager;