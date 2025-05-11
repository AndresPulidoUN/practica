
function showTab(id) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('d-none'));
    document.getElementById(id).classList.remove('d-none');
  }

function enviar(event){
   

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var edad = document.getElementById("edad").value;
    


    if (nombre&&apellidos&&correo&&edad) {
        var tarjeta = document.getElementById("card1");
        tarjeta.innerHTML = `
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">${nombre} ${apellidos}</h5>
              <p class="card-text">Correo: ${correo}</p> 
              <p class="card-text">Edad: ${edad}</p>
            </div>
          </div>
      `
      }
    }

document.getElementById("edad").addEventListener("input", function() {
  // Verificar si el valor es negativo
  if (this.value < 0) {
    alert("La edad no puede ser negativa.");
    this.value = ""; // Borrar el valor del campo
  } });

function habilitar(){
   
    var correo = document.getElementById("correo").value;
    var boton = document.getElementById("boton1");
     if (correo != "") {
    boton.disabled = false;
    } else {
     boton.disabled = true;
    }

}

