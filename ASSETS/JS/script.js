function calcularDiferencaDatas() {
    var inicial = new Date(document.getElementById("in_dtInicial").value);
    var final = new Date(document.getElementById("in_dtFinal").value);
    var diff = final - inicial;

    var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= years * (1000 * 60 * 60 * 24 * 365.25);

    var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    diff -= months * (1000 * 60 * 60 * 24 * 30.44);

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    var hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    var minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    var seconds = Math.floor(diff / 1000);
    diff -= seconds * 1000;

    var milliseconds = diff;

    document.getElementById("outputFull").innerHTML =
      years + " anos " +
      months + " meses " +
      days + " dias " +
      hours + " horas " +
      minutes + " minutos " +
      seconds + " segundos " +
      milliseconds + " milissegundos";
  }

  document.getElementById("calcularButton").addEventListener("click", calcularDiferencaDatas);
