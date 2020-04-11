class BonusManager {
    constructor(board, unit_size, color, bonuses_num) {
        this.board = board
        this.unit_size = unit_size
        this.color = color
        this.units = [];
        for (var i = 0; i < bonuses_num; i++) {
            this.addBonus()
        }
    }

    GetUnitIndexByPos(pos) {
        for(var i = 0; i < this.units.length; i++) {
            if (pos.x == this.units[i].x && pos.y == this.units[i].y) {
                return i;
            }
        }
        return false
    }

    addBonus() {
        var pos
        do {
            pos = {
                x: randMod(this.board.canvas.width, this.unit_size),
                y: randMod(this.board.canvas.height, this.unit_size)
            }
        } while (this.GetUnitIndexByPos(pos))

        this.units.push(new Unit(this.unit_size, this.unit_size, 
            BONUS, this.color, pos.x, pos.y, this.board.ctx
        ))
    }

    update() {}

    onCollision(pos) {
        var i = this.GetUnitIndexByPos(pos);
        this.units.splice(i, 1);
        this.addBonus();
    }

    draw() {
        for(var i = 0; i < this.units.length; i++) {
            this.units[i].draw()
        }
    }
}