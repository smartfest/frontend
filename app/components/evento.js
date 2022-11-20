function evento(evento) {
    return `
<h1 class="titulo">${evento.titulo}fest</h1>
<br>
<img class="flyer" src="${" ../" + evento.flyer}" alt="Evento " ${evento.descripcion}>
<div class="informacion">
        <div>
        <h5>Ubicacion: ${evento.ubicacion}</h5>
        <h5>Horario :${evento.horario_inicio}</h5>
        <h5>Fecha :${evento.fecha_evento} a las ${evento.horario_inicio} </h5>
        <img src="../../assets/icons/Facebook.svg" alt="">
        <img src="../../assets/icons/Instagram.svg" alt="">
        <img src="../../assets/icons/Twitter.svg" alt="">
        </div>
</div>
    `
}
export { evento }