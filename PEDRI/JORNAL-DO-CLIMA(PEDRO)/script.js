let uri = `https://api.hgbrasil.com/weather?key=c1bda15e&format=json-cors&city_name=rio largo`;

let imgPerson;
let imgIcon;

async function getTempo() {
 
  const encodedURI = encodeURI(uri);

  const resposta = await fetch(encodedURI);
  const json = await resposta.json();
  const results = json.results
  console.log(results);
  
let container = document.querySelector('.container')
  let btCidade;




const criarTela = ()=>{
    
    container.innerHTML = ''
    for( let i = 0; i <= 9; i++){


      switch (results.forecast[i].condition) {
          
          case 'cloud':
          imgPerson = 'img/Tokitoo.svg';
          imgIcon = 'img/icon-clima/CLOUDY.svg';

        break;
          case 'cloudly_day':  
          imgPerson = 'img/Tokitoo.svg';
          imgIcon = 'img/icon-clima/Cloudy_Sun.svg';

        break;
          case 'cloudly_night':
          imgPerson = 'img/kokushibouu.svg';  
          imgIcon = 'img/icon-clima/Cloudy_Night.svg';

        break;
          case 'clear_day':
          imgPerson = 'img/Rengokuu.svg'
          imgIcon = 'img/icon-clima/Sun.svg';
  
        break;
          case 'clear_night':
          imgPerson = 'img/kokushibouu.svg';
          imgIcon = 'img/icon-clima/Night.svg';

        break;
          case 'rain':
          imgPerson = 'img/Tanjiroo.svg';
          imgIcon = 'img/icon-clima/Rain.svg';

        break;
          case 'storm':
          imgPerson = 'img/Zenitsuu.svg';
          imgIcon = 'img/icon-clima/Storm.svg';

        break;
          case 'none_night':
          imgPerson = 'img/kokushibouu.svg';
          imgIcon = 'img/icon-clima/Night.svg';

        break;
          case 'none_day':
          imgPerson = 'img/Rengokuu.svg';
          imgIcon = 'img/icon-clima/Sun.svg';

        default:
          break;
      }

    

      
      container.innerHTML += `
        <div class="fixeds ${results.forecast[i].condition}">

    <div id="div-img" class="div-img">
      <img  class="img" src="${imgPerson}" alt="">
    </div>

    <div  class="div-icon">
      <img  class="img" src="${imgIcon}" alt="">
    </div>

     <div class="hora" > <p class="api-hora"> ${results.time}</p> </div>

     <span class="spanCidade">
     <img class="marcador" src="img/icons8-marcador-50.png" alt="">

     <span class="cidade"> 

      <input type = 'text' value = '${results.city}' class>
      
      <button class = 'btPesquisar'>
       <img src='img/icon-clima/lupa.svg'> </img>
     </button> 

     </span>

     <div class="retangulo"> <img src="img/Rectangle 5.svg" alt=""></div>
     
   
   </span>

    <div class="div-conteudo">


    

      <div class = 'divIcon'>
        <span> </span>
      </div>
        
      
        <div class="div-left">
        
         

          <div class="data" > <p class="api-data">${results.forecast[i].date}</p></div>

          <div class="dia" > <p class="api-dia">${results.forecast[i].weekday}</p> </div>

          
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
      
      `
      
    }
    
    btCidade = document.querySelector('.btPesquisar');
    
  }
  
 
 
  criarTela()
  
  const mudarCidade = ()=>{
  const inCity = document.querySelector('.inCity')
  let inCityValue = inCity.value;
  uri =  `https://api.hgbrasil.com/weather?key=c1bda15e&format=json-cors&city_name=${inCityValue}`
  getTempo()
}
  
btCidade.addEventListener('click', mudarCidade)
  

  
}

getTempo();

