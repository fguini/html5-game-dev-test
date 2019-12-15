import Entities from './entities';
const {Sprite, Text} = Entities;

class CanvasRenderer {
    constructor(w, h) {
        const canvas = document.createElement('canvas');
        this.w = canvas.width = w;
        this.h = canvas.height = h;
        this.view = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.textBaseline = "top";
    }

    render(container, clear = true) {
        const {ctx} = this;
        function renderRec(container) {
            for(const child of container.children) {
                if(child.visible == false)
                    return;

                ctx.save();
                if(child.pos)
                    ctx.translate(Math.round(child.pos.x), Math.round(child.pos.y));

                draw(child, ctx);

                if(child.children)
                    renderRec(child);
                ctx.restore();
            }
        }
        if(clear)
            ctx.clearRect(0, 0, this.w, this.h);
        renderRec(container);
    }
}

function draw(entity, ctx) {
    if(entity instanceof Text)
        drawText(entity, ctx);
    if(entity instanceof Sprite)
        drawSprite(entity, ctx);
}

function drawText(entity, ctx) {
    const {font, fill, align} = entity.style;
    if(font) ctx.font = font;
    if(fill) ctx.fillStyle = fill;
    if(align) ctx.textAlign = align;
    ctx.fillText(entity.text, 0, 0);
}

function drawSprite(entity, ctx) {
    const {x, y} = entity.pos;
    ctx.drawImage(entity.texture.image, x, y);
}

export default CanvasRenderer;