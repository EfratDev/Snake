class Game {
    constructor() {
        this.alive = true
        
        var bgCanvas = document.getElementById("background_canvas")
        bgCanvas.width = WIDTH
        bgCanvas.height = HEIGHT
        this.bgCtx = bgCanvas.getContext("2d")

        this.canvas = document.getElementById("game_canvas");
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        this.ctx = this.canvas.getContext("2d");
        this.unitSize = UNIT_SIZE
        this.objects = [] // need to be defined before passing this.getAvailablePos func
    }
    
    initialize() {
        // this.animateSlots()
        this.objects = [
            new Snake(
            this.ctx, 
            SNAKE_X, 
            SNAKE_Y, 
            this.unitSize, 
            RIGHT, 
            SNAKE_COLOR
            ), 
            new BonusManager(
                this.ctx,
                this.canvas.width, 
                this.canvas.height, 
                this.unitSize, 
                BONUS_COLOR, 
                BONUSES,
                this.getAvailablePos.bind(this)
            )
        ]
    }

    // animateSlots() {
    //     var startX = this.unitSize;
    //     var startY = this.unitSize;
    //     var endX = this.canvas.width;
    //     var endY = startY;
    //     var amount = 0;
    //     console.log(this.unitSize)
    //     setInterval(function() {
    //         console.log(this.ctx)
    //         amount += 0.05; // change to alter duration
    //         if (amount > 1) amount = 1;
    //         this.bgCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //         this.bgCtx.strokeStyle = "pink";
    //         this.bgCtx.moveTo(startX, startY);
    //         // lerp : a  + (b - a) * f
    //         this.bgCtx.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
    //         this.bgCtx.stroke();
    //     }, 30);
    // }
    
    startGame(interval) {
        this.initialize()
        setInterval(() => {
            if (this.alive) {
                this.objects.forEach(obj => {
                    obj.update()
                })
                var x = handleCollisions(this.objects, this.canvas.width, this.canvas.height)
                if (x) {
                    this.clear()
                    this.objects.forEach(obj => {
                        obj.draw()
                    })
                } else {
                    this.endGame()
                    this.alive = false
                }
            }
        }, interval)
    }

    endGame() {
        this.ctx.font = GAME_OVER_FONT;
        this.ctx.fillStyle = GAME_OVER_COLOR;
        this.ctx.textAlign = ALIGN
        this.canvas.textBaseline = BASELINE
        this.ctx.fillText(
            GAME_OVER_TEXT, 
            this.canvas.width / 2, 
            this.canvas.height / 2
        );
        
        this.alive = false
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getAvailablePos() {
        var pos = {}
        var units = []
        this.objects.forEach(obj => {
            units = units.concat(obj.units)
        })
        
        do {
            pos = {
                x: randMod(this.canvas.width, this.unitSize),
                y: randMod(this.canvas.height, this.unitSize)
            }
        } while (this.isPosTaken(pos, units))

        return pos
    }

    isPosTaken(pos, units) {
        for (const unit of units) {
            if (unit.pos.x == pos.x && unit.pos.y == pos.y) {
                return true
            }
        }
        return false
    }
}

var GAME = new Game();

Swal.fire({
    title: START_ALERT_TEXT,
    confirmButtonColor: START_BUTTON_COLOR,
    confirmButtonText: START_BUTTON_TEXT,
    background: START_ALERT_COLOR
}).then((result) => {
    if (result.value) {
        GAME.startGame(INTERVAL)
        backgroundMusic = document.getElementById("music")
        backgroundMusic.play()
    }
  })
