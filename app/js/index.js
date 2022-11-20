import { getEventos } from '../services/eventos-services.js'
import {card}from '../components/card.js'
import {footer} from '../components/footer.js'

document.addEventListener("DOMContentLoaded", (event) => {
    var panel = document.getElementById("panel");
    let body = document.getElementById("main")
    body.innerHTML+=footer()
    create_panel()
});



function create_panel() {
    getEventos().then(eventos => {
        eventos.forEach(element => {
            panel.innerHTML += card(element);
        });
    });
}



