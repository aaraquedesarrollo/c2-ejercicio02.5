const esItaliano = (apellido) => apellido.endsWith("i");

const printarPorConsola = (boolean) =>
  console.log(
    boolean
      ? "Este apellido tiene muchas probabilidades de ser italiano"
      : "Este apellido podría ser de cualquier país"
  );

const apellido1 = "Gonzalez";
const apellido2 = "Falciani";

printarPorConsola(esItaliano(apellido1));
printarPorConsola(esItaliano(apellido2));
printarPorConsola(esItaliano("Araque"));
printarPorConsola(esItaliano("Jimenezi"));
