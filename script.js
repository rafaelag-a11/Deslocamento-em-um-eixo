const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0; // Posição inicial
const speed = 2; // Velocidade de deslocamento em m/s
let time = 0; // Tempo em segundos
let distance = 0; // Espaço percorrido
const fps = 60; // Frames por segundo
const timeIncrement = 1 / fps; // Incremento de tempo por frame

function drawHeart(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
    ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size);
    ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
    ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
    ctx.fillStyle = 'red'; // Cor do coração
    ctx.fill();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    // Preenche o fundo
    ctx.fillStyle = '#E6E6FA'; // Cor de fundo roxo claro
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenha o coração
    drawHeart(x + 25, canvas.height / 2 - 10, 40); // Ajusta a posição do coração

    // Atualiza a posição e o tempo
    x += speed * timeIncrement;
    distance += speed * timeIncrement;
    time += timeIncrement;

    // Reseta a posição se o objeto sair da tela
    if (x > canvas.width) {
        x = -50; // Reseta para fora da tela
        distance = 0; // Reseta o espaço percorrido
    }

    // Atualiza as informações no HTML
    document.getElementById('time').innerText = time.toFixed(2);
    document.getElementById('distance').innerText = distance.toFixed(2);
    document.getElementById('displacement').innerText = x.toFixed(2);

    requestAnimationFrame(draw); // Chama a próxima animação
}

draw(); // Inicia a animação
