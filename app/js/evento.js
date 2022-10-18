
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
    console.log(data)
    let evento = document.getElementById("evento");
    evento.innerHTML=template(data)
    
    
}   

function template(data) {
    return `<h1 id="titulo">${data.titulo}fest</h1>
  <img id="flyer" src="${"../"+data.flyer}" alt="">

  <div class="informacion">
      <div>
          <h5 id="ubicacion">Ubicacion: ${data.ubicacion}</h5>
          <h5 id="horario">Horario :${data.horario_inicio}</h5>
      </div>
      <div class="redes-sociales">
          <img src="../../assets/icons/Facebook.svg" alt="">
          <img src="../../assets/icons/Instagram.svg" alt="">
          <img src="../../assets/icons/Twitter.svg" alt="">

      </div>`
}
