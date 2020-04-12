WIDTH = 850
HEIGHT = WIDTH;
INTERVAL = 150;

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

SNAKE_X = 10 * UNIT_SIZE
SNAKE_Y = 10 * UNIT_SIZE

BONUSES = 20
BONUS_COLOR = "rgb(247, 0, 255)"
SNAKE_COLOR = "rgba(9, 255, 0, 1)"

GAME_OVER_FONT = '130px monospace'
GAME_OVER_COLOR = "yellow"
ALIGN = "center"
BASELINE = "middle"
GAME_OVER_TEXT = "GAME OVER"

START_BUTTON_COLOR = "blue"
START_ALERT_TEXT = 'Press PLAY to start'
START_BUTTON_TEXT = 'play'
START_ALERT_COLOR = 'MediumSlateBlue'

var GAME = "my awsome game"