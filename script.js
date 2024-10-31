const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0; // Posição inicial
const speed = 2; // Velocidade de deslocamento
const width = 50; // Largura do objeto

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    // Desenha o objeto (um retângulo)
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, canvas.height / 2 - 25, width, 50);

    // Atualiza a posição
    x += speed;

    // Reseta a posição se o objeto sair da tela
    if (x > canvas.width) {
        x = -width;
    }

    requestAnimationFrame(draw); // Chama a próxima animação
}

draw(); // Inicia a animação
