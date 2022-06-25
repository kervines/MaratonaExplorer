const respostaElement = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')

const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

//click 'fazer pergunta'
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta.')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  //gerar numero aleatorio
  const totalRespostas = respostas.length
  const numberRandom = Math.floor(Math.random() * totalRespostas)
  console.log(respostas[numberRandom])
  respostaElement.innerHTML = pergunta + respostas[numberRandom]

  respostaElement.style.opacity = 1
  //sumir resposta dos de um tempo
  setTimeout(function () {
    respostaElement.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
