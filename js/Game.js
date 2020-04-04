class Game {
    constructor(width, height) {
        this.canvas = document.getElementById("game_canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");
    }

    newGameLoop() {
        objects.forEach(obj => {
            obj.update()
        })
        
        handleCollisions(objects)
        objects.forEach(obj => {
            obj.draw()
        })
    }

    handleCollisions(objects) {
        pos = objects.filter(obj => obj.type == SNAKE)[0].position
        objects.forEach(obj => {
            if (pos.x == obj.position.x && pos.y == obj.position.y) {
                obj.onCollision(snake)
                snake.onCollision(obj)
            }
        })
    }

    gameLoop(snake, bonusManager) {
        snake.update()
        var snake_x = snake.position.x;
        var snake_y = snake.position.y;

        // Check wall
        if (snake_x >= WIDTH || snake_y < 0 ||
            snake_y >= HEIGHT || snake_y < 0) {
            end_game();
        }

        var units = snake.units.slice(1).concat(bonusManager.units)
        var object = getObjByPosition(units, snake.position)
        
        if (!object) {
            snake.units.shift()
    
        } else {
            switch (object.type) {
                case BONUS:
                    snake.addUnit(snake.position);
                    index = bonusManager.units.indexOf(object)
                    bonusManager.units.splice(index, 1)
                    bonusManager.addUnit()
                    break;
                
                case SNAKE:
                    endGame();
            }
        }
        snake.draw()
        bonusManager.draw()
    }

    startGame(snake, bonus_manager, interval) {
        setInterval(this.gameLoop(snake, bonus_manager), interval);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
