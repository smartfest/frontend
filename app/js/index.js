import {getEventos} from '../services/eventos-services.js'

document.addEventListener("DOMContentLoaded", (event) => {
    var card = document.getElementById("panel");
    create_panel(card)
});
function navigate(id){
    alert("tes")
    
}
function create_panel(card) {
    let template = "";
        getEventos().then(eventos => {
            eventos.forEach(element => {
                template += create_template(element);
            });
            card.innerHTML = template;
        });
}

function create_template(evento) {    
    let id = evento.id;
    let background = evento.flyer;
    let titulo = evento.titulo;
    let ubicacion = evento.ubicacion;
    let fecha = evento.fecha_evento;
    return `<div class="card" onclick="go(${id})" >
                <div class="image" style="background-image: url(${background})">
                </div><h2>${titulo}</h2>
                    <div class="card-content">
                    <h2></h2>
                    <h3>Ubicacion: ${ubicacion}</h3>
                    <h3>Fecha: ${fecha}</h3>
                </div>
            </div>`;    
}




