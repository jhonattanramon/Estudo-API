async function getTempo() {
  let uri = `https://api.hgbrasil.com/weather?key=c1bda15e&format=json-cors&city_name=${}`;
  const encodedURI = encodeURI(uri);

  const resposta = await fetch(encodedURI);
  const json = await resposta.json();
  const results = json.results
  console.log(results);
  
 let arrayImg = [ 'img/Rengokuu.svg', 'img/Tanjiroo.svg','img/Tokitoo.svg','img/']
let container = document.querySelector('.container')
  let btCidade;


const criarTela = ()=>{
    
    
    for( let i = 0; i <= 2; i++){
      
      container.innerHTML += `
        <div class="fixeds ${results.forecast[i].condition}">

    <div id="div-img" class="div-img">
      <img  class="img" src="${arrayImg[i]}" alt="">
    </div>

     <div class="hora" > <p class="api-hora"> ${results.time}</p> </div>



    <div class="div-conteudo">


      <div class="alinhamento-especifico  div-alinhamento">

        
        <div class="div-left">
          <div class="retangulo"> <img src="img/Rectangle 5.svg" alt=""></div>
         

          <div class="data" > <p class="api-data">${results.forecast[i].date}</p></div>
          <div class="dia" > <p class="api-dia">${results.forecast[i].weekday}</p> </div>

          <span class="spanCidade">
            <img class="marcador" src="img/icons8-marcador-50.png" alt="">
            <span class="cidade">  <input type='text' value='${results.city}' class='inCity' >  <button class = 'btPesquisar'> <img src='img/icon-clima/lupa.svg'> </img> </button> </span>
          
          </span>
                      <span> <p>${results.forecast[i].description} </p> </span>

        </div>


        <div class="div-temperatura">
          
          <span class="line"><img src="img/Line 1.svg" alt=""></span>

          <span  class="temperatura"> <p class="api-temperatura" >Max:${results.forecast[i].max} °</p>
          <p class='api-temperatura'> 
            Min:${results.forecast[i].min} °
          </p>
          </span>

          
          <span hidden
          class="span-icon-sol"> <img src="img/icon-clima/icon-sol.svg" alt=""></span>

        </div>
      </div>

    </div>

  

  </div>
      
      `
      
    }
    
    btCidade = document.querySelector('.btPesquisar');
    console.log(btCidade);
  }
  
 
 
  criarTela()
  
  const mudarCidade = ()=>{
    
  const inCity = document.querySelector('.inCity')
  let inCityValue = inCity.value;
return inCityValue

 
 
}
  
btCidade.addEventListener('click', mudarCidade)
  

  
}

getTempo();