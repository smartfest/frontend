
var modalId = document.getElementById('modalId');


modalId.addEventListener('show.bs.modal', function (event) {
  let button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  let recipient = button.getAttribute('data-bs-whatever');
  // Use above variables to manipulate the DOM
});

function create_event() {
  const form = document.getElementById("form");
  let form_data = new FormData(form)


  const evento ={
    direccion:form_data.get("direccion_evento")

  }
}

