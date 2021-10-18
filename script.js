let caixa = document.getElementById('caixaMaior');
let faixa = document.getElementById('faixa');
let fonte = document.getElementById('mensagemCaixa');
let corCx = document.getElementById('caixaMaior');
var cor1 = 'Nenhuma cor de faixa selecionada.';
var cor2 = 'Nenhuma cor de fonte selecionada.';
var cor3 = 'Nenhuma cor de fundo selecionada.';

function corFaixa() {
  const cFaixa = document.querySelectorAll('input[name="cor-faixa"]');
  cFaixa.forEach(cor => {
    if (cor.checked) {
      switch (cor.id) {
        case 'red':
          faixa.style.backgroundColor = 'red';
          cor1 = 'Cor da faixa: Vermelho';
          break;
        case 'blue':
          faixa.style.backgroundColor = 'blue';
          cor1 = 'Cor da faixa: Azul';
          break;
        case 'orange':
          faixa.style.backgroundColor = 'orange';
          cor1 = 'Cor da faixa: Laranja';
          break;
        case 'violet':
          faixa.style.backgroundColor = 'violet';
          cor1 = 'Cor da faixa: Violeta';
          break;
        default:
          faixa.style.backgroundColor = 'black';
          break;
      }
    }
  });
}

function corFonte() {
  if (document.getElementById('green').checked) {
    fonte.style.color = 'green';
    cor2 = 'Cor da fonte: Verde';
  } else if (document.getElementById('brown').checked) {
    fonte.style.color = 'brown';
    cor2 = 'Cor da fonte: Marrom';
  } else {
    fonte.style.color = 'black';
  }
}

function corCaixa() {
  if (document.getElementById('grey').checked) {
    corCx.style.backgroundColor = 'grey';
    cor3 = 'Cor da caixa: Cinza';
  } else if (document.getElementById('yellow').checked) {
    corCx.style.backgroundColor = 'yellow';
    cor3 = 'Cor da caixa: Amarelo';
  } else {
    corCx.style.backgroundColor = 'rgba(0, 0, 0, 0.383)';
  }
}

function chamarJanela() {
  caixa.style.display = 'block';
  document.getElementById('opac').style.opacity = 0;
  corFaixa();
  corFonte();
  corCaixa();
  document.getElementById('mensagemCaixa').innerHTML =
    cor1 + '<br>' + cor2 + '<br>' + cor3;
}

function check(checked = false) {
  const cbs = document.querySelectorAll('input[class="checkCor"]');
  cbs.forEach(cb => {
    cb.checked = checked;
  });
}

function fecharJanela() {
  caixa.style.display = 'none';
  document.getElementById('opac').style.opacity = 1;
  check();
}
