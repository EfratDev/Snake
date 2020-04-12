class Snake {
    constructor(ctx, x, y, unit_size, direction, color) {
        this.ctx = ctx
        this.pos = {x: x, y: y}
        this.unit_size = unit_size
        this.direction = direction;
        this.color = color
        this.units = [];
        this.addUnit(this.pos)
        this.registerInputs()
    }

    addUnit(pos) {
        this.units.push(new Unit(
            this.unit_size,
            this.unit_size,
            SNAKE,
            this.color,
            pos.x,
            pos.y,
            this.ctx
        ));
    }

    getHead() {
        return this.units[this.units.length - 1]
    }

    update() {
        this.pos.x += DIRECTIONS[this.direction].x
        this.pos.y += DIRECTIONS[this.direction].y
        this.addUnit(this.pos)
        this.temp = this.units[0]
        this.units.shift()
    }

    onCollision(type) {
        if (type == BONUS) {
            this.units.unshift(this.temp)
        }
    }

    draw() {
        this.units.forEach(unit => {
            unit.draw()
        })
    }

    registerInputs() {
        document.addEventListener("keydown", event => {
            switch(event.code) {
                case "ArrowUp":    this.direction = UP; break
                case "ArrowDown":  this.direction = DOWN; break
                case "ArrowLeft":  this.direction = LEFT; break
                case "ArrowRight": this.direction = RIGHT; break
            }
        })
    }
}