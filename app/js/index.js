
document.addEventListener("DOMContentLoaded", (event) => {
    var card = document.getElementById("panel");
    create_panel(card)
});

function go() {
    document.cookie="Tuki"
    window.location.href("pages/evento.html")
}

function create_panel(card) {
    template = "";
    eventos.forEach(element => {
    template += create_templeate(element);
    });
    card.innerHTML=template
}

function create_templeate(evento) {
    let background = evento.flyer
    let titulo = evento.titulo;
    let ubicacion = evento.ubicacion;
    let fecha = evento.fecha_evento
    return `<div class="card" onclick="go()"> <div class="image" style="background-image: url(${background})"></div><h2>${titulo}</h2><div class="card-content"><h2></h2><h3>Ubicacion: ${ubicacion}</h3><h3>Fecha: ${fecha}</h3></div></div>`
}




