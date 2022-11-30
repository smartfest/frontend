
import { getEventos } from '../services/eventos-services.js'
var eventos = new Array;


document.addEventListener("DOMContentLoaded", (event) => {
    let params = new URLSearchParams(location.search);
    var id = params.get('id');
    getEventos().then(res => {
        eventos = res;
        createEvent(id)
    });
});



function createEvent(id) {

    let data = eventos.filter(evento => { return evento.id == id })[0];
   //console.log(data)
    let evento = document.getElementById("evento");
    evento.innerHTML = template(data)


}

function template(data) {
    return `<h1 class="titulo">${data.titulo}fest</h1><br>
  <img class="flyer" src="${"../" + data.flyer}" alt="Evento "${data.descripcion}>
  <div class="informacion">
  <div>
    <h5>Ubicacion: ${data.ubicacion}</h5>
    <h5>Horario :${data.horario_inicio}</h5>
    <h5>Fecha :${data.fecha_evento} a las ${data.horario_inicio} </h5>
    <img src="../../assets/icons/Facebook.svg" alt="">
          <img src="../../assets/icons/Instagram.svg" alt="">
          <img src="../../assets/icons/Twitter.svg" alt="">
  </div>
    
    </div>`
}
