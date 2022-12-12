

const dataAtual = document.querySelector('#data-atual');
const iconClima = document.querySelector('#icon-clima');
const graus = document.querySelector('#graus');
const cidade = document.querySelector('#cidade')

const btPesquisarCidade = document.querySelector('#btPesquisarCidade');
const vento = document.querySelector('#vento');
const descricao = document.querySelector('#descricao')





async function getUser(){
  console.log('aqui');
  let inPesquisarCidade = document.querySelector('#inPesquisarCidade').value;

  console.log(inPesquisarCidade);
  
  const url = `https://api.hgbrasil.com/weather?format=json-cors&key=c1bda15e&city_name=${inPesquisarCidade}`
  
  const reponse = await fetch(url);
  const data = await reponse.json()



  
  
  const results = data.results
  console.log(results);

  
  dataAtual.innerText = results.date
  graus.innerText = results.temp
  cidade.innerText = results.city_name
  vento.innerText = results.wind_speedy
  descricao.innerText = results.description
  
  
  
  
}

getUser()
btPesquisarCidade.addEventListener('click', getUser)
