function obtenerEmpleados() {
    
    const archivo = 'http://api.recibos.test/api/usuarios/page/5'

    fetch(archivo)
       .then(res => res.json())
       .then( (data) => {
            console.log(data.users)

            data.users.forEach(element => {
                console.log(element.id)

                document.querySelector('.contenido').innerHTML += `
                    
                      <tr>
                        <th scope="row">${element.id}</th>
                        <td>${element.nombre}</td>
                        <td>${element.documento}</td>
                        <td>${element.mail}</td>
                      </tr>
                `
            });
          
       })
}
obtenerEmpleados();

var formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(e){

    e.preventDefault();

    console.log('me diste un click')
    var datos = new FormData(formulario)
    console.log(datos)
    console.log(datos.get('file'))

    fetch('http://api.recibos.test/api/usuarios/carga_masiva',{
        method: 'POST',
        body: datos
    })
     .then(res => res.json())
     .then( data => {
         console.log(data)
     })

});


