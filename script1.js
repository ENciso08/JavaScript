const form = document.getElementById('#form');
const input = document.querySelectorAll('#formulario');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/
}


const validarFormulario = (e) =>{
   switch(e.target.name){
    case "usuario":
        validarCampo(expresiones.usuario, e.target, 'user');
    break;
    case "nombre":
        validarCampo(expresiones.nombre, e.target, 'name');
    break;
    case "password":
         validarPassword2()
    break;
    case "password2":
        validarPassword2()
    break;
    case "email":
        validarCampo(expresiones.correo, e.target, 'correo');
    break;
}


const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');   
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');   
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');   
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle'); 
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    }
}


const  validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password2');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
        
        document.getElementById(`grupo__password`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');   
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle'); 
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
    }
}

input.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});
};
