function newGameLoop(objects) {
    objects.forEach(obj => {
        obj.update()
    })
    
    handleCollisions(objects)
    objects.forEach(obj => {
        obj.draw()
    })
}

function handleCollisions(objects) {
    pos = objects.filter(obj => obj.type == SNAKE)[0].position
    objects.forEach(obj => {
        if (pos.x == obj.position.x && pos.y == obj.position.y) {
            obj.onCollision(snake)
            snake.onCollision(obj)
        }
    })
}