function calcularDiferencaDatas() {
    var inicial = new Date(document.getElementById("in_dtInicial").value);
    var final = new Date(document.getElementById("in_dtFinal").value);
    var diff = final - inicial;
    var diffInDays = diff / (1000 * 60 * 60 * 24);
    document.getElementById("output").innerHTML = diffInDays + " dias";
  }

  document.getElementById("calcularButton").addEventListener("click", calcularDiferencaDatas);
