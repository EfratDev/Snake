class Unit {
    constructor(width, height, type, color, x, y, ctx) {
        this.width = width;
        this.height = height;
        this.type = type;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.color = color;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
