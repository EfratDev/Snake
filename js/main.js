function initializeGame() {
    var game = new Game(WIDTH, HEIGHT);
    var snake = new Snake(game.ctx, SNAKE_X, SNAKE_Y, UNIT_SIZE, RIGHT, SNAKE_COLOR);
    var bonusManager = new BonusManager(game, UNIT_SIZE, BONUS_COLOR) //

    // game.animate_slots(UNIT_SIZE)
    game.startGame(snake, bonusManager, INTERVAL)
}

function getObjByPosition(units, position) {
    for (var i = 0; i < units.length; i++) {
        if (units[i].x == position[X] && units[i].y == position[Y]) {
            return units[i];
        } else {
            return null;
        }
    }
}

function endGame() {
    
}

initializeGame()
