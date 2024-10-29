document.getElementById("boton_validar").addEventListener("click", () => {
    const regexString = document.getElementById("expresion_regular").value.trim().replace(/^\/|\/$/g, "");
    const textoPrueba = document.getElementById("texto_prueba").value;
    const resultado = document.getElementById("resultado");

    try {
        resultado.textContent = new RegExp(regexString).test(textoPrueba) 
            ? "La expresion regular coincide con el texto ingresado." 
            : "La expresion regular no coincide con el texto ingresado.";
        resultado.style.color = new RegExp(regexString).test(textoPrueba) ? "#00ff00" : "#ff0000";
    } catch {
        resultado.textContent = "La expresion regular es invalida.";
        resultado.style.color = "#ff0000";
    }
});
