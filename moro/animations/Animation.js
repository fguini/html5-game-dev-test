class Animation {
    constructor(frames, rate) {
        this.frames = frames;
        this.rate = rate;
        this.reset();
    }

    update(dt) {
        const {frames, rate} = this;
        if((this.currentTime += dt) > rate) {
            this.currentFrame++;
            this.frame = this.frames[this.currentFrame % frames.length];
            this.currentTime -= rate;
        }
    }

    reset() {
        this.currentFrame = 0;
        this.currentTime = 0;
        this.frame = this.frames[this.currentFrame];
    }
}

export default Animation;