const game = new Game();

function preload() {
	game.preload()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  game.draw() 
  game.drawTreasure()
  
}


function keyPressed() {
  if (keyCode === 39) {
    clear()  
  game.player.moveRight()
  }
  if (keyCode === 37) {
    clear()
  game.player.moveLeft()
  }
  if (keyCode === 38) {
    clear()
  game.player.moveUp()
  }
  if (keyCode === 40) {
    clear()
  game.player.moveDown()
  }

  if (keyCode === 68) {
    clear()  
  game.player2.moveRight()
  }
  if (keyCode === 65) {
    clear()
  game.player2.moveLeft()
  }
  if (keyCode === 87) {
    clear()
  game.player2.moveUp()
  }
  if (keyCode === 83) {
    clear()
  game.player2.moveDown()
  }
}



