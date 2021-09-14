function clicarFahrenheit(){
  
  var temperaturaInserida = document.getElementById("temperaturaCelsius");
  var temperaturaCelsius = temperaturaInserida.value;
  
  var temperaturaCelsiusInt = parseInt(temperaturaCelsius);
  
  var resultado = (temperaturaCelsiusInt * 1.8) + 32
  
  var textoExibido = document.getElementById("valorConvertido");
  var valorConvertido = "A temperatura em Fahrenheit é: " + resultado;
  textoExibido.innerHTML = valorConvertido;
  
  if(temperaturaCelsius == 0){
    var textoExibido = document.getElementById("valorConvertido");
    var valorConvertido = "A temperatura não foi informada";
    textoExibido.innerHTML = valorConvertido;
  }else{
    
  }
  
}

function clicarKelvin(){
  
  var temperaturaInserida = document.getElementById("temperaturaCelsius");
  var temperaturaCelsius = temperaturaInserida.value;
  
  var temperaturaCelsiusInt = parseInt(temperaturaCelsius);
  
  var resultado = (temperaturaCelsiusInt ) + 273;
  
  var textoExibido = document.getElementById("valorConvertido");
  var valorConvertido = "A temperatura em Kelvin é: " + resultado;
  textoExibido.innerHTML = valorConvertido;
  
  if(temperaturaCelsius == 0){
    var textoExibido = document.getElementById("valorConvertido");
    var valorConvertido = "A temperatura não foi informada";
    textoExibido.innerHTML = valorConvertido;
  }else{
    
  }
}