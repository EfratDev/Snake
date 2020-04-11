function initializeGame() {
    var game = new Game(WIDTH, HEIGHT);
    var snake = new Snake(game.ctx, SNAKE_X, SNAKE_Y, UNIT_SIZE, RIGHT, SNAKE_COLOR);
    var bonusManager = new BonusManager(game, UNIT_SIZE, BONUS_COLOR, BONUSES) //

    // start button then play background
    // game.animate_slots(UNIT_SIZE)
    game.startGame(snake, bonusManager, INTERVAL)
}

function endGame(board) {
    board.ctx.font = GAME_OVER_FONT;
    board.ctx.fillStyle = GAME_OVER_COLOR;
    board.ctx.textAlign = ALIGN
    board.canvas.textBaseline = BASELINE
    board.ctx.fillText(
        GAME_OVER_TEXT, 
        board.canvas.width / 2, 
        board.canvas.height / 2
    );
    
    board.alive = false
}

initializeGame()
