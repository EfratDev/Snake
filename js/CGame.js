class Game {
    constructor(width, height) {
        this.alive = true
        this.canvas = document.getElementById("game_canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");
    }

    startGame(snake, bonus_manager, interval) {
        setInterval(() => GameLoop([snake, bonus_manager], this), interval)
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
