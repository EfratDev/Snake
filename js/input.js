document.addEventListener("keydown", event => {
    switch(event.code) {
        case "ArrowUp":    myGamePiece.y -= myGamePiece.height; break
        case "ArrowDown":  myGamePiece.y += myGamePiece.height; break
        case "ArrowLeft":  myGamePiece.x -= myGamePiece.width; break
        case "ArrowRight": myGamePiece.x += myGamePiece.width; break
    }
})
