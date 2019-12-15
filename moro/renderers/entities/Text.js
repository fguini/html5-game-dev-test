import BaseEntity from './BaseEntity';

class Text extends BaseEntity {
    constructor(text = "", style = {}) {
        super();
        this.text = text;
        this.style = style;
    }

    draw(ctx) {
        if(!ctx) throw Error('A context must be especified!');

        const {font, fill, align} = this.style;
        if(font) ctx.font = font;
        if(fill) ctx.fillStyle = fill;
        if(align) ctx.textAlign = align;
        ctx.fillText(this.text, 0, 0);
    }
}

export default Text;