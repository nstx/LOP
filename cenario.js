const selectLevel = function () {
    alert("Selecione um nível a seguir antes de iniciar o jogo!");
    nivel = parseInt(prompt("*Nível 1: Muito fácil\n*Nível 2: Fácil\n*Nível 3: Médio\n*Nível 4: Difícil\n*Nível 5: Muito difícil"));
    if (nivel == 1) {
        velocidadeX = 3;
        velocidadeY = 4;
        barras = 100;
        distancia = 175;
    }
    if (nivel == 2) {
        velocidadeX = 4;
        velocidadeY = 4;
        barras = 125;
        distancia = 175;
    }
    if (nivel == 3) {
        velocidadeX = 5;
        velocidadeY = 4;
        barras = 150;
        distancia = 175;
    }
    if (nivel == 4) {
        velocidadeX = 6;
        velocidadeY = 4;
        barras = 175;
        distancia = 175;
    }
    if (nivel == 5) {
        velocidadeX = 6.5;
        velocidadeY = 4;
        barras = 200;
        distancia = 175;
    }
    if(nivel == null) {
        selectLevel();
    }
}

const cenario = function () {
    x += velocidadeX;
    translate(-x, 0);
    background(220);
    fill(150);
    for (var a = 0; a <= barras; a = a + 4) {
        rect(300 + distancia * a, altura[0] + 90, 30, 300, 100); //de baixo
        rect(300 + distancia * a, -15, 30, altura[0], 100); //de cima

        rect(300 + distancia * (a + 1), altura[1] + 90, 30, 300, 100);
        rect(300 + distancia * (a + 1), -15, 30, altura[1], 100);

        rect(300 + distancia * (a + 2), altura[2] + 90, 30, 300, 100);
        rect(300 + distancia * (a + 2), -15, 30, altura[2], 100);

        rect(300 + distancia * (a + 3), altura[3] + 90, 30, 300, 100);
        rect(300 + distancia * (a + 3), -15, 30, altura[3], 100);
    }
}

const randomAlt = function () {
    if (x % 350  == 0) {
        altura[0] = Math.random() * (250 - 50) + 50;
    } if (x % 525 == 0) {
        altura[1] = Math.random() * (250 - 50) + 50;
    } if (x % 700 == 0) {
        altura[2] = Math.random() * (250 - 50) + 50;
    } if (x % 875 == 0) {
        altura[3] = Math.random() * (250 - 50) + 50;
    }
}

const info = function () {
    fill(50);
    textSize(10);
    var numBarras = parseInt(x / (distancia + 20));
    text("Número de barras: " + (numBarras), x + 30, 50);
    text("x: " + x, x + 30, 60);
    text("Dificildade: "+ nivel, x + 30, 40);
    if (mouseIsPressed) {
        textSize(10);
        text("Use a seta para cima" + "\n" + "para mover o personagem", x + 460, 30);
    } else {
        text("INFO", x + 480, 37.5);
    }
}
