$(document).ready(function() {
  /**
   * Tinte de fondo para los distintos tipos de datos que lo requieran
   */
  var size = $("#cont").html();
  for (var cont = 0; cont < size; cont++) {
    var tipo = $("tr#fila" + cont + " td[name='tipo']").html();
    var transmision = $("tr#fila" + cont + " td[name='transmision']").html();

    if (tipo === "OVA") {
      $("tr#fila" + cont + " td[name='tipo']").css({
        backgroundColor: "#67b3eb",
        color: "white"
      });
    }

    if (tipo === "SERIE") {
      $("tr#fila" + cont + " td[name='tipo']").css({
        backgroundColor: "#ffd965",
        color: "black"
      });
    }

    if (tipo === "PELICULA") {
      $("tr#fila" + cont + " td[name='tipo']").css({
        backgroundColor: "#7030a0",
        color: "white"
      });
    }

    if (transmision === "EN EMISION") {
      $("tr#fila" + cont + " td[name='transmision']").css({
        backgroundColor: "#00b050",
        color: "white"
      });
    }
    if (transmision === "FINALIZADA") {
      $("tr#fila" + cont + " td[name='transmision']").css({
        backgroundColor: "#e84c22",
        color: "white"
      });
    }
    /**
     * Validaciones para el estado de visualizacion
     */

    var numCaps = $("tr#fila" + cont + " td[name='capitulos']").html();
    var capsVistos = $("tr#fila" + cont + " td[name='vistos']").html();

    if (numCaps === capsVistos) {
      $("tr#fila" + cont + " td[name='estadoActual']").html("VISTO");
      $("tr#fila" + cont + " td[name='estadoActual']").css({
        backgroundColor: "#70ad47",
        color: "#256400"
      });
    }
    if (numCaps > capsVistos) {
      $("tr#fila" + cont + " td[name='estadoActual']").html("VIENDO");
      $("tr#fila" + cont + " td[name='estadoActual']").css({
        backgroundColor: "#46b6f9",
        color: "#3974d5"
      });
    }
    if (capsVistos === 0) {
      $("tr#fila" + cont + " td[name='estadoActual']").html("PENDIENTE");
      $("tr#fila" + cont + " td[name='estadoActual']").css({
        backgroundColor: "#ff9b37",
        color: "#dd6f00"
      });
    }
  }
});

$("#checkbox").on("change", function() {
  var randomYES = Math.floor(Math.random() * 6) + 1;
  var randomNO = Math.floor(Math.random() * 6) + 1;
  var messageYES;
  var messageNO;

  switch (randomYES) {
    case 1:
      messageYES = "BUENO... SI INSISTES";
      break;
    case 2:
      messageYES = "UN POCO DE AYUDA NO ME VENDRÍA MAL :).";
      break;
    case 3:
      messageYES = "｡◕‿‿◕｡";
      break;
    case 4:
      messageYES = "SI, POR FAVOR!";
      break;
    case 5:
      messageYES = "SI, POR FAVOR!";
      break;
    case 6:
      messageYES = "SI, POR FAVOR!";
      break;
  }

  if ($(this).is(":checked")) {
    $("#helpIndicator").html(1);
    $(".checkStatus").html(messageYES);
    $(".checkStatus").addClass("checkStatusYES");
    $(".checkStatus").removeClass("checkStatusNO");
  } else {
    $("#helpIndicator").html(0);
    $(".checkStatus").html("NO, GRACIAS.");
    $(".checkStatus").addClass("checkStatusNO");
    $(".checkStatus").removeClass("checkStatusYES");
  }
});
