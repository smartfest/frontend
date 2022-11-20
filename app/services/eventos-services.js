
const env = {
    "URL": "https://raw.githubusercontent.com/smartfest/frontend/main/data/eventos.json"
}



async function getEventos() {
    var err = {
        "err": "No se encontro el archivo json"
    }
    var data = fetch(env.URL)
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(respuesta => {
            return Promise.resolve(respuesta);
        }).catch(() => {
            return Promise.reject(err);
        });
    return await data
}

function crearEvento(evento) {
/**
    Logica de crear

*/
}
 async function getEventoById(id_evento) {
    var data = fetch(env.URL)
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(respuesta => {
            return Promise.resolve(respuesta.filter((evento) => { return id_evento === evento.id })[0]);
        }).catch(() => {
            return Promise.reject(err);
        });
    return await data
}

export { getEventos, getEventoById }