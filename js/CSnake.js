class Snake {
    constructor(ctx, x, y, unit_size, direction, color) {
        this.ctx = ctx
        this.position = {
            x: x,
            y: y
        }

        this.unit_size = unit_size
        this.direction = direction;
        this.color = color
        this.units = [];
        this.addUnit(this.position)
    }

    addUnit(position) {
        this.units.push(new Unit(
            this.unit_size,
            this.unit_size,
            SNAKE,
            this.color,
            position.x,
            position.y,
            this.ctx
        ));
    }

    update() {
        this.position.x += DIRECTIONS[this.direction].x
        this.position.y += DIRECTIONS[this.direction].y
        this.addUnit(this.position)
        this.temp = this.units[0]
        this.units.shift()
    }

    draw() {
        this.units.forEach(unit => {
            unit.draw()
        })
    }
}