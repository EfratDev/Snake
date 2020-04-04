// class Snake {
//     constructor(ctx, x, y, unit_size, direction, color) {
//         this.ctx = ctx
//         this.position = {
//             x: x,
//             y: y
//         }

//         this.unit_size = unit_size
//         this.direction = direction;
//         this.color = color
//         this.units = [];
//         this.addUnit(this.position)
//     }

//     addUnit(position) {
//         this.units.push(new Unit(
//             this.unit_size,
//             this.unit_size,
//             SNAKE,
//             this.color,
//             position.x,
//             position.y,
//             this.ctx
//         ));
//     }

//     update() {
//         this.position.x += DIRECTIONS[this.direction].x;
//         this.position.y += DIRECTIONS[this.direction].y;
//         this.addUnit(this.position)
//         this.temp = this.units[0]
//         this.units.shift()
//     }

//     draw() {
//         this.units.array.forEach(unit => {
//             unit.draw()
//         })
//     }
// }

// class BonusManager {
//     constructor(board, unit_size, color) {
//         this.ctx = board.ctx
//         this.unit_size = unit_size
//         this.color = color
//         this.bonuses = [];
//         this.addUnit(this.position)
//         this.addUnit(this.position)
//         this.addUnit(this.position)
//     }

//     addUnit() {
//         var x  = position[X];
//         var y = position[Y];
//         this.bonuses.push(new Unit(
//             this.unit_size, 
//             this.unit_size, 
//             BONUS,
//             this.color, 
//             x, 
//             y, 
//             this.ctx
//         ));
//     }

//     update() {

//     }

//     draw() {
//         this.bonuses.forEach(bonus => {
//             bonus.draw()
//         })
//     }
// }

// class Unit {
//     constructor(width, height, type, color, x, y, ctx) {
//         this.width = width;
//         this.height = height;
//         this.type = type;
//         this.x = x;
//         this.y = y;
//         this.ctx = ctx;
//         this.color = color;
//     }

//     draw() {
//         this.ctx.fillStyle = this.color;
//         this.ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
// }

// class Bonus extends Unit {
//     constructor(width, height, type, color, x, y, ctx) {
//         super(width, height, type, color, x, y, ctx)
//     }

//     onCollide() {

//     }
// }