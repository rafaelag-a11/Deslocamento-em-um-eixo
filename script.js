const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0; // Posição inicial
const speed = 2; // Velocidade de deslocamento em m/s
const width = 50; // Largura do objeto
let time = 0; // Tempo em segundos
let distance = 0; // Espaço percorrido
const fps = 60; // Frames por segundo
const timeIncrement = 1 / fps; // Incremento de tempo por frame

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    // Desenha o objeto (um retângulo)
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, canvas.height / 2 - 25, width, 50);

    // Atualiza a posição e o tempo
    x += speed * timeIncrement;
    distance += speed * timeIncrement;
    time += timeIncrement;

    // Reseta a posição se o objeto sair da tela
    if (x > canvas.width) {
        x = -width; // Reseta para fora da tela
        distance = 0; // Reseta o espaço percorrido
    }

    // Atualiza as informações no HTML
    document.getElementById('time').innerText = time.toFixed(2);
    document.getElementById('distance').innerText = distance.toFixed(2);
    document.getElementById('displacement').innerText = x.toFixed(2);

    requestAnimationFrame(draw); // Chama a próxima animação
}

draw(); // Inicia a animação
