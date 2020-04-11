function GameLoop(objects, board) {
    if (board.alive) {
        objects.forEach(obj => {
            obj.update()
        })
        
        x = new handleCollisions(objects, board.canvas.width, board.canvas.height)
        console.log(x.alive)
        if (x.alive) {
            board.clear()
            objects.forEach(obj => {
                obj.draw()
            })
        } else {
            endGame(board)
        }
    }
}

class handleCollisions {
    constructor(objects, max_width, max_height) {
        this.max_width = max_width
        this.max_height = max_height
        this.players = objects.filter(obj => obj.units[0].type == SNAKE)
        this.collidables = objects // objects.filter(obj => obj.units[0].type != SNAKE)
        this.alive = true

        this.isPlayersAlive()
    }

    isPlayersAlive() {
        this.players.forEach(player => {
            this.player = player
            this.alive = this.isOnBoard(player.pos.x, player.pos.y)
            this.collidables.forEach(obj =>
                this.checkCollisions(obj, player.pos.x, player.pos.y)
            )
        })
    }

    isOnBoard(x, y) {
        return !(x < 0 || x >= this.max_width || y < 0 || y >= this.max_height)
    }
    
    checkCollisions(obj, x, y) {
        obj.units.forEach(unit => {
            if (x == unit.pos.x && y == unit.pos.y && unit != this.player.units[this.player.units.length - 1]) {
                this.handleCollision(unit, obj)
            }
        })
    }

    handleCollision(unit, obj) {
        this.alive = (unit.type != SNAKE)
        obj.onCollision(this.player.pos)
        this.player.onCollision(unit.type)
    }

    getAllUnits(collidables) {
        units = []
        collidables.forEach(collidable => {
            units.concat(collidable.units)
        })
        return units
    }
}