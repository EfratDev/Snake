WIDTH = 850
HEIGHT = WIDTH;
INTERVAL = 20;

UNIT_SIZE = WIDTH / 20;

X = 0;
Y = 1;

SNAKE = 1
BONUS = 2
WALL = 3

DIRECTIONS = {
    "right": {x: UNIT_SIZE, y: 0},
    "left": {x: -UNIT_SIZE, y: 0},
    "up": {x: 0, y: UNIT_SIZE},
    "down": {x: 0, y: -UNIT_SIZE}
}

RIGHT = "right"
LEFT = "left"
UP = "up"
DOWN = "down"

SNAKE_X = 0
SNAKE_Y = 0

BONUS_COLOR = "pink"
SNAKE_COLOR = "green"
