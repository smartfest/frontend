 function event_table(evento){
    return `<tr class="table-primary" id="evento-${evento.id}" >
    <td>${evento.id}</td>
    <td>${evento.titulo}</td>
    <td>${evento.fecha_evento} - ${evento.horario_inicio}</td>
    <td class="buttons">
        <button type="button" class="btn btn-primary"><img src="../../assets/icons/view.png" alt="" srcset="" srcset="" width="36px" height="36px"></button>
        <button type="button" onclick="edit_event('${evento.id}')" class="btn btn-warning " data-bs-toggle="modal" data-bs-target="#modalId"><img src="../../assets/icons/edit.png" alt="" sizes="" srcset="" width="36px" height="36px"></button>
        <button type="button" class="btn btn-danger" onclick="delete_event('${evento.id}')"><img src="../../assets/icons/Delete.svg" alt="" sizes="" srcset="" width="36px" height="36px"></button>
    </td>
</tr>`
}
export {event_table}