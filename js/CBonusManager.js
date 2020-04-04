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

        this.units.push(new Unit(this.unit_size, this.unit_size, 
            BONUS, this.color, pos.x, pos.y, this.board.ctx
        ))
    }

    update() {}

    draw() {
        for(var i = 0; i < this.units.length; i++) {
            this.units[i].draw()
        }
    }
}