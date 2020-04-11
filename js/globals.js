WIDTH = 850
HEIGHT = WIDTH;
INTERVAL = 500;

UNIT_SIZE = WIDTH / 20;

X = 0;
Y = 1;

SNAKE = 1
BONUS = 2
WALL = 3

DIRECTIONS = {
    "right": {x: UNIT_SIZE, y: 0},
    "left": {x: -UNIT_SIZE, y: 0},
    "up": {x: 0, y: -UNIT_SIZE},
    "down": {x: 0, y: UNIT_SIZE}
}

RIGHT = "right"
LEFT = "left"
UP = "up"
DOWN = "down"

SNAKE_X = 0
SNAKE_Y = 0

BONUSES = 20
BONUS_COLOR = "yellow"
SNAKE_COLOR = "rgba(9, 255, 0, 1)"

GAME_OVER_FONT = "100px Arial"
GAME_OVER_COLOR = "purple"
ALIGN = "center"
BASELINE = "middle"
GAME_OVER_TEXT = "GAME OVER!"
