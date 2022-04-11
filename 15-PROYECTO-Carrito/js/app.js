//Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const variarCarritoBtn=document.querySelector('#vaciar-carrito');
const listaCursos= document.querySelector('#lista-cursos');
let articulosCarrito= [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaCursos.addEventListener('click', agregarCurso);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarCurso);

     //Al Vaciar el carrito
     variarCarritoBtn.addEventListener('click', ()=> {
         articulosCarrito=[];// reseteamos el arreglo
         limpiarHTML();
        });
        
}


//Funciones 

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado= e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

//Elimina un curso del carrito 
function eliminarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
    const cursoId= e.target.getAttribute('data-id');

    //elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito= articulosCarrito.filter(curso => curso.id!== cursoId );
    carritoHTML();//iteramos sobre el carrito y mostramos el HTML

    }
}

//Lee el contenido del HTML al que dimos click y extrae la informacion del carrito

function leerDatosCurso(curso){

   //console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso={
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
    }

    //Revisa si un elemento ya existe en el carrito
    const existe= articulosCarrito.some(curso =>curso.id === infoCurso.id);
   if(existe){
    //Actualizamos la cantidad 

    const curso= articulosCarrito.map(curso =>{
        if( curso.id===infoCurso.id){
            curso.cantidad++;
            return curso;//retorna el objeto actualizado
        }else{
            return curso;//retorna objetos no duplicados
        }
    });

    articulosCarrito=[...cursos];
   }else{
            //Agrega elementos al arreglo de carrito

            articulosCarrito=[...articulosCarrito, infoCurso];
   }


    console.log(articulosCarrito)
    carritoHTML();


}

//Muestra el carrito de compras en el HTML

function carritoHTML(){

    //limpiar el HTML
    limpiarHTML();

    //recorre el carrito y genera HTML
    articulosCarrito.forEach(curso =>{
        const {imagen,titulo,precio,cantidad,id}= curso;
        const row= document.createElement('tr');
        row.innerHTML=`
        <td>
        <img src"${curso.imagen}" width="100">
        </td>

        <td>
            ${titulo}
        </td>

        <td>
        ${precio}
        </td>

        <td>
        ${cantidad}
        </td>

        <td>
        <a href="#" class="borrar-curso" data-id="${id}" >X </a>
        </td>
        `;

        //agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

//Elimina los cursos del tbody 

function limpiarHTML(){
   //FORMA LENTA:  contenedorCarrito.innerHTML= '';

   while(contenedorCarrito.firstChild){
   contenedorCarrito.removeChild(contenedorCarrito.firstChild)
   }
}