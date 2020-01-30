import Entities from './entities';
import TileSprite from './entities/TileSprite';
const {Sprite, Text} = Entities;

class CanvasRenderer {
    constructor(w, h) {
        const canvas = document.createElement('canvas');
        this.w = canvas.width = w;
        this.h = canvas.height = h;
        this.view = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.textBaseline = "top";
    }

    render(container, clear = true) {
        if(container.visible !== false) {
            const {ctx} = this;
            if(clear)
                ctx.clearRect(0, 0, this.w, this.h);
            renderRec(ctx, container);
        }
    }
}

function renderRec(ctx, container) {
    for(const child of container.children) {
        if(child.visible !== false) {
            ctx.save();
            if(child.pos)
                ctx.translate(Math.round(child.pos.x), Math.round(child.pos.y));
            if(child.scale)
                ctx.scale(child.scale.x, child.scale.y);
            if(child.anchor)
                ctx.translate(child.anchor.x, child.anchor.y);
            if(child.rotation) {
                const px = child.pivot ? child.pivot.x : 0;
                const py = child.pivot ? child.pivot.y : 0;
                ctx.translate(px, py);
                ctx.rotate(child.rotation);
                ctx.translate(-px, -py);
            }

            draw(child, ctx);

            if(child.children)
                renderRec(ctx, child);
            ctx.restore();
        }
    }
}

function draw(entity, ctx) {
    if(entity instanceof Text)
        drawText(entity, ctx);
    if(entity instanceof TileSprite)
        drawTileSprite(entity, ctx);
    else if(entity instanceof Sprite)
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
    ctx.drawImage(entity.texture.image, 0, 0);
}

function drawTileSprite(entity, ctx) {
    ctx.drawImage(
        entity.texture.image,
        entity.frame.x * entity.tileW,
        entity.frame.y * entity.tileH,
        entity.tileW,
        entity.tileH,
        0,
        0,
        entity.tileW,
        entity.tileH
    );
}

export default CanvasRenderer;