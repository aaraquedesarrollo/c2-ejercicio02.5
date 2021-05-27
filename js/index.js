
function esItaliano (apellido) {
  return apellido.endsWith("i");
}

function printarPorConsola(boolean) {
  if (boolean) {
    console.log("Este apellido tiene muchas probabilidades de ser italiano")
  }
  else {
    console.log("Este apellido podría ser de cualquier país");
  }
}

const apellido1 = "Gonzalez";
const apellido2 = "Falciani";

printarPorConsola(esItaliano(apellido1));
printarPorConsola(esItaliano(apellido2));
printarPorConsola(esItaliano("Araque"));
printarPorConsola(esItaliano("Jimenezi"));
