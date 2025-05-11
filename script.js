document.addEventListener("DOMContentLoaded", () => {
    const correoInput = document.getElementById("correo");
    const edadInput = document.getElementById("edad");
    const btnEnviar = document.getElementById("btnEnviar");
    const form = document.getElementById("clienteForm");
    const tarjetasContainer = document.getElementById("tarjetasContainer");
  

    correoInput.addEventListener("input", () => {
      btnEnviar.disabled = correoInput.value.trim() === "";
    });
  
   
    edadInput.addEventListener("input", () => {
      if (edadInput.value < 0) {
        alert("La edad no puede ser negativa, porfavor intente de nuevo");
        edadInput.value = "";
      }
    });
  
    
    btnEnviar.addEventListener("click", () => {
      const nombres = document.getElementById("nombres").value.trim();
      const apellidos = document.getElementById("apellidos").value.trim();
      const correo = correoInput.value.trim();
      const edad = edadInput.value.trim();
  
      if (nombres && apellidos && correo && edad) {
        const tarjeta = document.createElement("div");
        tarjeta.className = "col-md-4 mb-3";
        tarjeta.innerHTML = `
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">${nombres} ${apellidos}</h5>
              <p class="card-text">Correo: ${correo}</p>
              <p class="card-text">Edad: ${edad}</p>
            </div>
          </div>
        `
        tarjetasContainer.appendChild(tarjeta);
  
      
        form.reset();
        btnEnviar.disabled = true;
      }
    });
  });
  