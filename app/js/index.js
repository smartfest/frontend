
document.addEventListener("DOMContentLoaded", (event) => {
    var card = document.getElementById("panel");
    create_panel(card)
});

function go() {
    alert("test")
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














const eventos=[
    {
        "id":"1",
        "titulo": "Oktober Fest",
        "fecha_evento": "12/09/2022",
        "horario_inicio": "19:30",
        "descripcion": "Fiesta de la cerveza en octubre",
        "flyer": "../assets/photos/fiesta_oktober.png",
        "redes_sociales": [
            {
                "red": "Instragram",
                "link": "www.instagram.com"
            },
            {
                "red": "Facebook",
                "link": "www.Facebook.com"
            },{
                "red": "Twitter",
                "link": "www.Twitter.com"
            }

        ],
        "tipo_evento": "Evento",
        "ubicacion": "Argentina,Neuquen,Avenida Argentina,1413",
        "id_user": "juan23"
        
    },
    {
        "id":"2",
        "titulo": "Club Night Fest",
        "fecha_evento": "19/10/2022",
        "horario_inicio": "22:30",
        "descripcion": "Fiesta retro , con la mejor musica",
        "flyer": "../assets/photos/fiesta_club-night.jpg",
        "redes_sociales": [
            {
                "red": "Instragram",
                "link": "www.instagram.com"
            },
            {
                "red": "Facebook",
                "link": "www.Facebook.com"
            },{
                "red": "Twitter",
                "link": "www.Twitter.com"
            }

        ],
        "tipo_evento": "Fiesta publica",
        "ubicacion": "Argentina,Neuquen,Buenos aires 143",
        "id_user": "Carlos123"
        
    },   {
        "id":"2",
        "titulo": "Pool party",
        "fecha_evento": "12/12/2022",
        "horario_inicio": "15:30",
        "descripcion": "Fiesta en la piscina de Neuquen",
        "flyer": "../assets/photos/fiesta_pool.jpg",
        "redes_sociales": [
            {
                "red": "Instragram",
                "link": "www.instagram.com"
            },
            {
                "red": "Facebook",
                "link": "www.Facebook.com"
            },{
                "red": "Twitter",
                "link": "www.Twitter.com"
            }

        ],
        "tipo_evento": "Evento",
        "ubicacion": "Argentina,Neuquen,Gatica 113",
        "id_user": "juan23"
        
    },  {
        "id":"2",
        "titulo": "Bassed Festival",
        "fecha_evento": "12/12/2022",
        "horario_inicio": "20:15",
        "descripcion": "Fiesta super techno",
        "flyer": "../assets/photos/fiesta_techno.jpg",
        "redes_sociales": [
            {
                "red": "Instragram",
                "link": "www.instagram.com"
            },
            {
                "red": "Facebook",
                "link": "www.Facebook.com"
            },{
                "red": "Twitter",
                "link": "www.Twitter.com"
            }

        ],
        "tipo_evento": "Festival",
        "ubicacion": "Argentina,Neuquen,Alderete  1213",
        "id_user": "marley3400"
    }

]
module.exports =eventos;