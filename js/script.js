/* Listas de factura de construccion */

/* 1) haga que js muestre el mundo de las monedas de ladrillo, etc.LISTO */

/* 2) Haga que pacman se mueva arriba y abajo */

/* CREAR Variable de WORLD */
var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 1, 2, 1, 1, 2],
    [2, 1, 1, 2, 1, 1, 2, 1, 1, 2],
    [2, 1, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 0, 2, 2, 1, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

];


var pacman = {
    x: 20,
    y:20
};
function displayWorld() {
    var output = '';

    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>";
        for (var j = 0; j<world[i].length; j++) {
            if (world[i][j] == 2)
                output += "\n\t<div class='brick'></div>";
            else if (world[i][j] == 1)
                output += "\n\t<div class='coin'></div>";
            if (world[i][j] == 0)
                output += "\n\t<div class='empty'></div>";
        }
        output += "\n</div>";
    }
    //console.log(output);
    document.getElementById("world").innerHTML = output;
}
function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y+"px";
    document.getElementById('pacman').style.left = pacman.x+"px";
}
displayWorld();
displayPacman();


document.onkeydown = function(e){
    if(e.keyCode == 37){
        pacman.x -=20;
    }
    else if(e.keyCode == 39){
        pacman.x += 20;
    }
    else if(e.keyCode == 38){
        pacman.y -= 20;
    }
    else if(e.keyCode == 40){
        pacman.y += 20;
    }
    console.log(e.keyCode);

    displayPacman();
}

