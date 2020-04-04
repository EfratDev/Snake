function randMod(max, mod) {
    x = Math.floor(Math.random() * (max - mod));
    return x - x % mod;
}

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

class BonusManager {
    constructor(board, unit_size, color) {
        this.board = board
        this.unit_size = unit_size
        this.color = color
        this.units = [];

        for (var i = 0; i < 10; i++) {
            this.addBonus({
                x: randMod(board.canvas.width, unit_size),
                y: randMod(board.canvas.height, unit_size)
            })
        }
    }

    isPositionFree(pos) {
        this.units.forEach(unit => {
            if (pos.x == unit.x && pos.y == unit.y) {
                return false
            }
        })
        return true
    }

    addBonus() {
        var pos
        do {
            pos = {
                x: randMod(this.board.canvas.width, this.unit_size),
                y: randMod(this.board.canvas.height, this.unit_size)
            }
        } while (!this.isPositionFree(pos))

        this.units.push(new Unit(
            this.unit_size, 
            this.unit_size, 
            BONUS,
            this.color, 
            pos.x,
            pos.y, 
            this.board.ctx
        ));
    }

    draw() {
        for(var i = 0; i < this.units.length; i++) {
            this.units[i].draw()
        }
    }
}

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
