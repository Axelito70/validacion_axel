document.getElementById("boton_validar").addEventListener("click", () => {
    const expresionRegular = document.getElementById("expresion_regular").value.trim();
    const textoPrueba = document.getElementById("texto_prueba").value;
    const resultado = document.getElementById("resultado");

    try {
        const regexString = expresionRegular.replace(/^\/|\/$/g, "");
        const expresion = new RegExp(regexString);

        const esCoincidente = expresion.test(textoPrueba);

        if (esCoincidente) {
            resultado.textContent = "La expresion regular coincide con el texto ingresado.";
            resultado.style.color = "#00ff00";
        } else {
            resultado.textContent = "La expresion regular no coincide con el texto ingresado.";
            resultado.style.color = "#ff0000";
        }
    } catch (error) {
        resultado.textContent = "La expresion regular es invalida.";
        resultado.style.color = "#ff0000";
    }
});
