document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  let formulario = document.getElementById("formulario");
  formulario.addEventListener('submit', function() {
    formulario.reset();
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('usuario').value;
  if(usuario.length == 0) {
    alert('No has escrito tu nombre');
    return;
  }
  evento.preventDefault();
  var usuario = document.getElementById('email').value;
  if(usuario.length == 0) {
        alert('Ingresa un correo electrónico válido!');
        return;
      }

  var clave = document.getElementById('clave').value;
  if (clave.length < 6) {
    alert('La clave no es válida');
    return;
  }
  this.submit();
}

});