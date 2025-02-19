function cargarContactos(){
    fetch('https://www.raydelto.org/agenda.php', meh).then(function(respuesta){
        return respuesta.json();
    }).then(function(data){       
        var lista = document.getElementById('lista');
        data.forEach(function(contacto){
            var li = document.createElement('li');
            li.innerHTML = contacto.nombre + ' ' + contacto.apellido + ' ' + contacto.telefono;
            lista.appendChild(li);
        });
    });
}


/* Referencia para guardar nuevos contactos:

const url = 'https://www.raydelto.org/agenda.php'; // Replace with your API endpoint

const datos = {
    nombre: "John Doe",
    apellido: "johndoe@example.com",
    telefono: 30
};

fetch(url, {
    method: 'POST', // HTTP method
    headers: {
        'Content-Type': 'application/json' // Specify content type as JSON
    },
    body: JSON.stringify(data) // Convert JavaScript object to JSON string
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON response
})

*/