let numeroAleatorio;
let tentativas = 0;
let input;;
let button;
let feedback;

function setup() {
  createCanvas(400, 200);
  numeroAleatorio = floor(random(1, 101));
  
  input = createInput();
  input.position(20, 150);
  
  button = createButton('Palpite');
  button.position(input.x + input.width, 150);
  button.mousePressed(verificarPalpite);
  
  feedback = createElement('h2', '');
  feedback.position(20, 100);
}

function verificarPalpite() {
 const palpite = parseInt(input.value());
  tentativas++;
  
  if (palpite === numeroAleatorio) {
    feedback.html('Parabéns! Você acertou o número em ${tentativas} tentativas!');
  } else if (palpite < numeroAleatorio) {
    feedback.html('Palpite muito baixo. Tente novamente!');
  } else {
    feedback.html('Palpite muito alto. Tente novamente');
  }
}