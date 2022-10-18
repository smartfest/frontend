
const env = {
    "eventos": "https://raw.githubusercontent.com/smartfest/frontend/main/data/eventos.json"
}

async function getEventos() {
    const err = {
        "err": "No se encontro el archivo json"
    }
    const data = fetch(env.eventos)
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(respuesta => {
            return Promise.resolve(respuesta);
        }).catch(() => {
            return Promise.reject(err);
        });
   return await data
}

export { getEventos }