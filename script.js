const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;
let speed = 2; // Velocidade inicial
let time = 0;
let distance = 0;
const fps = 60;
const timeIncrement = 1 / fps;
let animationId; // Para armazenar o ID da animação
let isRunning = true; // Controle de execução

// Função para desenhar o coração
function drawHeart(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
    ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size);
    ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
    ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
    ctx.fillStyle = 'red';
    ctx.fill();
}

// Função para desenhar no canvas
function draw() {
    if (!isRunning) return; // Se não estiver em execução, não desenha

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    drawHeart(x + 25, canvas.height / 2 - 10, 40); // Desenha o coração

    // Atualiza a posição e o tempo
    x += speed * timeIncrement;
    distance += speed * timeIncrement;
    time += timeIncrement;

    // Reseta a posição se o objeto sair da tela
    if (x > canvas.width) {
        x = -50;
        distance = 0;
    }

    // Atualiza as informações no HTML
    document.getElementById('time').innerText = time.toFixed(2);
    document.getElementById('distance').innerText = distance.toFixed(2);
    document.getElementById('speed').innerText = speed.toFixed(2);

    animationId = requestAnimationFrame(draw); // Chama a próxima animação
}

// Aumenta a velocidade ao clicar no botão
document.getElementById('increaseSpeed').addEventListener('click', () => {
    speed += 1; // Incrementa a velocidade em 1 m/s
    document.getElementById('speed').innerText = speed.toFixed(2); // Atualiza a exibição
});

// Diminui a velocidade ao clicar no botão
document.getElementById('decreaseSpeed').addEventListener('click', () => {
    speed = Math.max(0, speed - 1); // Decrementa a velocidade, não permitindo valores negativos
    document.getElementById('speed').innerText = speed.toFixed(2); // Atualiza a exibição
});

// Para a animação
document.getElementById('stop').addEventListener('click', () => {
    isRunning = false; // Define a execução como falsa
});

// Retoma a animação
document.getElementById('resume').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true; // Define a execução como verdadeira
        draw(); // Retoma a animação
    }
});

// Ajusta o tamanho do canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Tamanho inicial
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

draw(); // Inicia a animação
