/**
 * Configurar el HELP MODE
 */

//Definir los selectores
const tipo = document.querySelector("#tipo");
const nombre = document.querySelector("#nombre");
const temporada = document.querySelector("#temporada");
const transmision = document.querySelector("#transmision");
const numeroCapitulos = document.querySelector("#numeroCapitulos");
const numeroVistos = document.querySelector("#numeroVistos");

//Configuracion de los tooltip para cada objeto
tippy(tipo, {
  content: "Selecciona el tipo de produccion de la lista desplegable.",
  theme: "light-border",
  arrow: true,
  arrowType: "round",
  placement: "bottom",
  delay: [600, 0]
});

tippy(nombre, {
  content:
    "Escribe aqui el nombre de la produccion que estas viendo o que quieres comenzar a ver.",
  theme: "light-border",
  arrow: true,
  arrowType: "round",
  placement: "bottom",
  delay: [600, 0]
});

tippy(temporada, {
  content:
    "Ingresa la temporada de esta serie. (No aplica para PELICULAS u OVA'S)",
  theme: "light-border",
  arrow: true,
  arrowType: "round",
  placement: "bottom",
  delay: [600, 0]
});

tippy(transmision, {
  content:
    "Aqui va el estado de la transmision de esta serie. (No aplica para PELICULAS u OVA'S)",
  theme: "light-border",
  arrow: true,
  arrowType: "round",
  placement: "bottom",
  delay: [600, 0]
});

tippy(numeroCapitulos, {
  content:
    "Ingresa el numero de capitulos que tiene la serie. (No aplica para PELICULAS U OVA'S)",
  theme: "light-border",
  arrow: true,
  arrowType: "round",
  placement: "bottom",
  delay: [600, 0]
});

tippy(numeroVistos, {
  content:
    "Aqui va el numero de capitulos vistos de esta serie. (No aplica para... ash ya lo saben (☞ﾟ∀ﾟ)☞)",
  theme: "light-border",
  arrow: true,
  arrowType: "round",
  placement: "bottom",
  delay: [600, 0]
});

//Instanciar los objetos tippy() para controlar todas sus funciones
const instanceTipo = tipo._tippy;
const instanceNombre = nombre._tippy;
const instanceTemporada = temporada._tippy;
const instanceTransmision = transmision._tippy;
const instanceNumeroCapitulos = numeroCapitulos._tippy;
const instanceNumeroVistos = numeroVistos._tippy;

//Deshabilitar los tooltip del HELP MODE para que no aparezcan automaticamente
instanceTipo.disable();
instanceNombre.disable();
instanceTemporada.disable();
instanceTransmision.disable();
instanceNumeroCapitulos.disable();
instanceNumeroVistos.disable();

//Validacion del toogle para el HELP MODE
$("#checkbox").on("change", function() {
  if ($("#helpIndicator").html() == 1) {
    instanceTipo.enable();
    instanceTipo.enable();
    instanceNombre.enable();
    instanceTemporada.enable();
    instanceTransmision.enable();
    instanceNumeroCapitulos.enable();
    instanceNumeroVistos.enable();
  } else {
    instanceTipo.disable();
    instanceNombre.disable();
    instanceTemporada.disable();
    instanceTransmision.disable();
    instanceNumeroCapitulos.disable();
    instanceNumeroVistos.disable();
  }
});

/**
 * Fin de la Configuracion el HELP MODE
 */

tippy(".fa-question-circle", {
  content:
    "Da clic en el interruptor para que salgan mas notitas como yo! Cuando lo hagas, ¡Solo pon el mouse sobre lo que quieras! ʕ•ᴥ•ʔ",
  theme: "light-border",
  arrow: true,
  arrowType: "round",
  placement: "right"
});
