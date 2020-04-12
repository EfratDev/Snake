class BonusManager {
    constructor(ctx, width, height, unit_size, color, bonuses_num, func) {
        this.getAvailablePos = func
        this.ctx = ctx
        this.width = width
        this.height = height
        this.unit_size = unit_size
        this.color = color
        this.units = [];
        for (var i = 0; i < bonuses_num; i++) {
            this.addBonus()
        }
    }

    GetUnitIndexByPos(pos) {
        for(var i = 0; i < this.units.length; i++) {
            if (pos.x == this.units[i].pos.x && pos.y == this.units[i].pos.y) {
                return i;
            }
        }
        return false
    }

    addBonus() {
        var pos = this.getAvailablePos()
        this.units.push(new Unit(this.unit_size, this.unit_size, 
            BONUS, this.color, pos.x, pos.y, this.ctx
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
