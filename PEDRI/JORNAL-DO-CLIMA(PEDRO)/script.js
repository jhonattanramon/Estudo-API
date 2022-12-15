async function getTempo() {
    const uri = 'https://api.hgbrasil.com/weather?key=c1bda15e&format=json-cors&city_name=Rio Largo,AL';
    const encodedURI = encodeURI(uri);
    
    const resposta = await fetch(encodedURI);
    const json = await resposta.json();
    const results = json.results
    console.log(results);

    const apiHora = document.querySelector('.api-hora')
    const apiData = document.querySelector('.api-data')
    const apiDia = document.querySelector('.api-dia')
    const apiCidade = document.querySelector('.api-cidade')
    const apiTemperatura= document.querySelector('.api-temperatura')
    const divPersonagem = document.querySelector('#div-img')
    console.log(divPersonagem);
 

    const carregarInformacoesApi = () => {
      apiHora.innerHTML = results.time;
      apiData.innerHTML = results.date;
      apiDia.innerHTML = results.forecast[0].weekday
      apiCidade.innerHTML = results.city;
      apiTemperatura.innerHTML = results.temp
    }

    const trocaDePersonagem = () => {
      
      divPersonagem.innerHTML = 
    }
     
     console.log(json);
     carregarInformacoesApi()
}

getTempo();