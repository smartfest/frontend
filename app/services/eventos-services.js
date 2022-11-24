
const env = {
    "URL": "https://raw.githubusercontent.com/smartfest/frontend/developer/data/eventos.json",
    "API": 'http://127.0.0.1:3003/api'
}
var axios = axi.create({
    baseURL:env.API,
    timeout: 1000,
  });

async function getEventos() {
    return await fetch(env.URL, { method: "GET" })
        .then(respuesta => {
            console.log(respuesta)
            return Promise.resolve(respuesta.json());
        }).catch(() => {
            return Promise.reject("No se encontraron eventos");
        });
}

async function status() {
    axios({
        method: 'get',
        url: env.API,
      }).then((data)=>{console.log(data)})
}


function crearEvento(evento) {
    fetch(env.API + '/evento', { method: "POST", mode: "no-cors", body: { mode: "formdata", formdata: JSON.stringify(evento) } })
        .then(res => { console.log("Consulta POST Exitosa", res) })
        .catch(exp => { console.log("Consuslta POST Rechazada", exp) })

}
async function getEventoById(id_evento) {
    var data = fetch(env.URL)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            return Promise.resolve(respuesta.filter((evento) => { return id_evento === evento.id })[0]);
        }).catch(() => {
            return Promise.reject(err);
        });
    return await data
}

export { getEventos, getEventoById, crearEvento, status }