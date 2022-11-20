
import { getEventoById } from '../services/eventos-services.js'
import {evento} from '../components/evento.js'

document.addEventListener("DOMContentLoaded", (event) => {
    let params = new URLSearchParams(location.search);
    const id = params.get('id');
    getEventoById(id).then(e =>{
        viewEvent(e)
    })
});

function viewEvent(event) {
    let contenedor = document.getElementById("evento");
    contenedor.innerHTML = evento(event)
}
