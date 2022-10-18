
const env = {
    "data": "https://raw.githubusercontent.com/smartfest/frontend/main/data/eventos.json"
}

document.addEventListener("DOMContentLoaded", (event) => {
    var card = document.getElementById("panel");
    create_panel(card)
});

function create_panel(card) {
    let template = "";
    fetch(env.data)
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(eventos => {
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
    //var cad= "<div class='card' onclick='go()'>"+id+" <div class='image' style='background-image: url("+background+")'></div><h2>"+titulo+"</h2><div class='card-content'><h2></h2><h3>Ubicacion: "+ubicacion+"</h3><h3>Fecha: "+fecha+"</h3></div></div>";    
    //return cad;
    return `<a class="link-div" href="pages/evento.html?id=${id}"><div class="card" onclick="go()"> <div class="image" style="background-image: url(${background})"></div><h2>${titulo}</h2><div class="card-content"><h2></h2><h3>Ubicacion: ${ubicacion}</h3><h3>Fecha: ${fecha}</h3></div></div></a>`;
}




