class Unit {
    constructor(width, height, type, color, x, y, ctx) {
        this.width = width;
        this.height = height;
        this.type = type;
        this.color = color;
        this.pos = {x: x, y: y}
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
}
