function handleCollisions(objects, width, height) {
    var snakes = objects.filter(obj => obj.units[0].type == SNAKE)

    // For every snake
    for (const snake of snakes) {
        var x = snake.pos.x
        var y = snake.pos.y

        // Wall check
        if (x < 0 || x >= width || y < 0 || y >= height) {
            return false
        }

        for (const obj of objects) {
            for (const unit of obj.units) {
                if (x == unit.pos.x &&
                    y == unit.pos.y && 
                    unit != snake.getHead()
                    ) {
                    // Collision with snake => Death
                    if (unit.type == SNAKE) {
                        return false
                    }
                    
                    // Collision with other object - call collision handlers
                    obj.onCollision(snake.pos)
                    snake.onCollision(unit.type)
                }
            }
        }
        return true
    }
    
}
