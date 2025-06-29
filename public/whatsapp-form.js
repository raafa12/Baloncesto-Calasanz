// Función para validar el teléfono
function validarTelefono(telefono) {
  const regex = /^[0-9\s\-\+\(\)]{9,}$/;
  return regex.test(telefono);
}

// Función para mostrar mensajes de error
function mostrarError(campo, mensaje) {
  // Eliminar mensajes de error existentes
  const errorExistente = campo.parentNode.querySelector('.text-red-500');
  if (errorExistente) return;
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'text-red-500 text-sm mt-1';
  errorDiv.textContent = mensaje;
  campo.parentNode.appendChild(errorDiv);
  
  // Resaltar el campo con error
  campo.classList.add('border-red-500');
  campo.classList.remove('border-gray-600');
}

// Función para limpiar errores
function limpiarErrores() {
  const errores = document.querySelectorAll('.text-red-500');
  errores.forEach(error => error.remove());
  
  // Restaurar estilos de los campos
  const campos = document.querySelectorAll('input, select');
  campos.forEach(campo => {
    campo.classList.remove('border-red-500');
    if (!campo.classList.contains('hidden')) {
      campo.classList.add('border-gray-600');
    }
  });
}

// Función principal para enviar el formulario
function enviarWhatsApp() {
  limpiarErrores();
  const form = document.getElementById('inscripcionForm');
  if (!form) return false;
  
  const nombre = form.nombre?.value.trim();
  const telefono = form.telefono?.value.trim();
  const genero = form.genero?.value;
  const categoria = form.categoria?.value;
  const semanas = document.querySelector('input[name="semanas"]:checked')?.value;
  
  // Validación de campos
  let valido = true;
  
  if (!nombre) {
    mostrarError(form.nombre, 'Por favor, introduce tu nombre.');
    valido = false;
  }
  
  if (!telefono || !validarTelefono(telefono)) {
    mostrarError(form.telefono, 'Por favor, introduce un número de teléfono válido.');
    valido = false;
  }
  
  if (!genero) {
    mostrarError(form.genero, 'Por favor, selecciona tu género.');
    valido = false;
  }
  
  if (!categoria) {
    mostrarError(form.categoria, 'Por favor, selecciona tu categoría.');
    valido = false;
  }
  
  if (!semanas) {
    const semanasContainer = document.querySelector('.semanas-container');
    if (semanasContainer) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'text-red-500 text-sm mt-1';
      errorDiv.textContent = 'Por favor, selecciona la duración.';
      semanasContainer.appendChild(errorDiv);
    }
    valido = false;
  }
  
  if (!valido) return false;
  
  // Formatear el mensaje para WhatsApp
  const mensaje = '*Nueva Inscripción Jornadas de Tecnificación*%0A%0A' +
                '*Nombre:* ' + nombre + '%0A' +
                '*Teléfono:* ' + telefono + '%0A' +
                '*Género:* ' + genero + '%0A' +
                '*Categoría:* ' + categoria + '%0A' +
                '*Duración:* ' + semanas + (semanas === '1' ? ' semana' : ' semanas');
  
  // Abrir WhatsApp con el mensaje
  window.open('https://wa.me/34690342138?text=' + mensaje, '_blank');
  
  // Mostrar mensaje de éxito
  const successDiv = document.createElement('div');
  successDiv.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4';
  successDiv.textContent = '¡Formulario enviado con éxito! Por favor, completa el proceso en WhatsApp.';
  form.appendChild(successDiv);
  
  // Ocultar el mensaje después de 5 segundos
  setTimeout(() => {
    successDiv.remove();
  }, 5000);
  
  // Resetear el formulario
  form.reset();
  
  return false;
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('inscripcionForm');
  if (form) {
    // Asignar manejador de eventos al formulario
    form.onsubmit = function(e) {
      e.preventDefault();
      enviarWhatsApp();
      return false;
    };
    
    // Limpiar errores al cambiar los campos
    const campos = form.querySelectorAll('input, select');
    campos.forEach(campo => {
      campo.addEventListener('change', function() {
        this.classList.remove('border-red-500');
        this.classList.add('border-gray-600');
        const error = this.parentNode.querySelector('.text-red-500');
        if (error) error.remove();
      });
    });
  }
});
