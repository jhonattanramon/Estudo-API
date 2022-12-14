async function getTempo() {
    const uri = 'https://api.hgbrasil.com/weather?key=2aec33e4&format=json-cors&city_name=Rio Largo,AL';
    const encodedURI = encodeURI(uri);
    
    const resposta = await fetch(encodedURI);
    const json = await resposta.json();

    document.getElementById('temperatura').innerHTML = json.results.temp;
    document.getElementById('cidade').innerHTML = json.results.city_name;
  //  document.getElementById('hora').innerHTML = json.results.time;
    document.getElementById('data').innerHTML = json.results.date
     //document.getElementById('dia').innerHTML = json.results.we
     
     console.log(json);
}

getTempo();