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

/* function handleCollisions(objects, max_width, max_height) {
    var players = objects.filter(obj => obj.units[0].type == SNAKE)
    var objects = objects.filter(obj => obj.units[0].type != SNAKE)
    var alive = true

    players.forEach(player => {
        if (player.position.x < 0 || player.position.x >= max_width ||
            player.position.y < 0 || player.position.y >= max_height) {
            return false
        }
        objects.forEach(obj => {
            obj.units.forEach(unit => {
                if ((player.position.x == unit.x) && 
                    (player.position.y == unit.y)) {
                    if (obj.units[0].type == SNAKE) {
                        alive = false
                    }
                    obj.onCollision(player.position)
                    player.onCollision(obj.units[0].type)
                }
            })
        })
    })
    console.log(alive)
    return alive
}
*/
// TODO: separate to funcs
class handleCollisions {
    constructor(objects, max_width, max_height) {
        this.max_width = max_width
        this.max_height = max_height
        this.players = objects.filter(obj => obj.units[0].type == SNAKE)
        this.objects = objects.filter(obj => obj.units[0].type != SNAKE)
        this.alive = true

        this.isPlayerAlive()
    }

    isPlayerAlive() {
        this.players.forEach(player => {
            this.player = player
            this.alive = this.isOnBoard(player.position.x, player.position.y)

            this.objects.forEach(obj =>
                this.checkCollisions(obj, player.position.x, player.position.y)
            )
        })
    }

    isOnBoard(x, y) {
        return !(x < 0 || x >= this.max_width || y < 0 || y >= this.max_height)
    }

    checkCollisions(obj, x, y) {
        obj.units.forEach(unit => {
            if (x == unit.x && y == unit.y) {
                this.handleCollision(unit, obj)
            }
        })
    }

    handleCollision(unit, obj) {
        this.alive = (unit.type != SNAKE)
        obj.onCollision(this.player.position)
        this.player.onCollision(unit.type)
    }
}