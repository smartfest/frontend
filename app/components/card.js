function card(evento){
    return `<div class="card" onclick="go(${evento.id})" >
                <div class="image" style="background-image: url(${evento.flyer})">
                </div><h2>${evento.titulo}</h2>
                    <div class="card-content">
                    <h2></h2>
                    <h3>Ubicacion: ${evento.ubicacion}</h3>
                    <h3>Fecha: ${evento.fecha}</h3>
                </div>
            </div>`;
}
export {card}