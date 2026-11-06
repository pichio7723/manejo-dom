const boton = document.getElementById("click");
const visorContador = document.getElementById("contador-visual");
const cuerpoTabla = document.getElementById("tabla-registros"); // Traemos el tbody

let contador = 0; 

boton.addEventListener("click", () => {
    contador++; 
    visorContador.textContent = contador; 

    
    const horaActual = new Date().toLocaleTimeString();

    
    const nuevaFila = document.createElement("tr");
    const celdaNumero = document.createElement("td");
    const celdaHora = document.createElement("td");

    
    celdaNumero.textContent = `Click #${contador}`;
    celdaHora.textContent = horaActual;


    nuevaFila.appendChild(celdaNumero);
    nuevaFila.appendChild(celdaHora);

    
    cuerpoTabla.appendChild(nuevaFila);
});
