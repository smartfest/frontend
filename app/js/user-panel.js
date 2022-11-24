import { getEventos, getEventoById,crearEvento,status } from '../services/eventos-services.js'
import { event_table } from '../components/event_table.js'


var input_event;
var form_data;
document.addEventListener("DOMContentLoaded", () => {
  let estado = document.getElementById("admin")
  status().then(e=>{
    console.log(e)
    estado.innerHTML=e;
  })
  const form = document.getElementById("form");
  form_data = new FormData(form)

  input_event =
  {
    titulo: document.getElementById("titulo"),
    ubicacion: document.getElementById("ubicacion"),
    fecha_inicio: document.getElementById("fecha_incio"),
    fecha_fin: document.getElementById("fecha_fin"),
    flyer: document.getElementById("flyer"),
    tipo_evento: document.getElementById("nombre_evento")
  }


})

window.create_event = function (id_evento) {
  input_event.ubicacion.value = ""
  input_event.titulo.value = ""
  input_event.fecha_inicio.value = ""
  input_event.flyer.value = ""
  input_event.fecha_fin.value = ""

}
window.delete_event=function (id_evento){
  let event = document.getElementById("evento-"+id_evento);
  event.innerHTML=" "
}

window.save_event = function () {

  const form = document.getElementById("form");
  form_data = new FormData(form)

  const evento = {
    direccion: form_data.get("direccion_evento"),
    nombre_evento: form_data.get("nombre_evento"),
    flyer: form_data.get("flyer"),
    fecha_inicio: form_data.get("fecha_inicio"),
    fecha_fin: form_data.get("fecha_fin")
  }
  console.log(evento,"---",form_data)
  crearEvento(evento)

}

window.edit_event = function (id_evento) {
  const form = document.getElementById("form");
  let form_data = new FormData(form)
  getEventoById(id_evento).then(e => {
    input_event.ubicacion.value = e.ubicacion
    input_event.titulo.value = e.titulo;
    input_event.fecha_inicio.value= e.fecha_evento
  })

  //input_event.flyer.value=          event.flyer
  //input_event.fecha_fin.value=      event.fecha_fin

}

var modalId = document.getElementById('modalId');
var eventos;
getEventos().then((data) => {
  eventos = data;
  data_tabla()
});


function data_tabla() {
  const table = document.getElementById("data_tabla")

  eventos.forEach(evento => {
    table.innerHTML += (event_table(evento));
  });

}



