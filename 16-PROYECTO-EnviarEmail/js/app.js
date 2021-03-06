//Variables
const btnEnviar= document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
//Variable para campos
const email= document.querySelector('#email');
const asunto= document.querySelector('#asunto');
const mensaje= document.querySelector('#mensaje');

const er= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
//event Listener
eventListeners();

function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    
    //reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);


    //Enviar Email
    formulario.addEventListener('submit', enviarEmail);

}


//Funciones

function iniciarApp(){
    //Deshabilitar el envio 
    btnEnviar.disabled=true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}


//Valida formulario
function validarFormulario(e){
    if(e.target.value.lenght > 0){
        //console.log("HAy algo");

        //Elimina los errores
        const error= document.querySelector('p.error');
        if(error){
            error.remove();
        }
        
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios.');
    }

    if(e.target.type==='email'){
        const er= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(er.test( e.target.value )){
            const error= document.querySelector('p.error');
            if(error){
                error.remove();
            }
            
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
            
        }else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no valido.');
        }
    }
    if(er.test(email.value) && asunto.value!=''&& mensaje.value!=''){
        btnEnviar.disabled=false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }

}

function mostrarError(mensaje){
    const mensajeError=document.createElement('p');
    mensajeError.textContent= mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3','mt-5', 'text-center', 'error');
    const errores = document.querySelectorAll('.error');
    if(errores.length===0){
        formulario.appendChild(mensajeError);
    }
    
}

//Envia el email
function enviarEmail(e) {
    e.preventDefault();
    //mostrar spinner
    const spinner=document.querySelector('#spinner');
    spinner.style.display='flex';
    //Despues de unos 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout( ()=> {
        spinner.style.display='none';

        //Mensaje con confirmacion de que se ha enviado correctamente

        const parrafo=document.createElement('p');
        parrafo.textContent='El mensaje se envi?? correctamente';
        parrafo.classList.add('text-center', 'sy-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');
        //Inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout(()=>{
            parrafo.remove();//eliminar el mensaje de exito
            resetearFormulario();
        },5000);
    }, 3000);

}

function resetearFormulario(){
    formulario.reset();

    iniciarApp();
}