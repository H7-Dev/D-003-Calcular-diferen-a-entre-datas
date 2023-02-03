function getDifference(startDate, endDate) {
    var diff = endDate - startDate;

    var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);

    var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    return {
      years: years,
      months: months,
      days: days,
    };
  }

  function formatDifference(difference) {
    return difference.years + " anos " +
      difference.months + " meses " +
      difference.days + " dias "
  }

  function calculateDifference() {
    var startDate = new Date(document.getElementById("in_dtInicial").value);
    var endDate = new Date(document.getElementById("in_dtFinal").value);

    var difference = getDifference(startDate, endDate);
    var formattedDifference = formatDifference(difference);

    document.getElementById("outputFull").innerHTML = formattedDifference;
  }

  document.getElementById("calcularButton").addEventListener("click", calculateDifference);
