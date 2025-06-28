function enviarWhatsApp() {
  const form = document.getElementById('inscripcionForm');
  if (!form) return;
  
  const nombre = form.nombre?.value || 'No especificado';
  const telefono = form.telefono?.value || 'No especificado';
  const genero = form.genero?.value || 'No especificado';
  const categoria = form.categoria?.value || 'No especificada';
  const semanas = form.semanas?.value || 'No especificado';
  
  // Formatear el mensaje para WhatsApp
  const mensaje = '*Nueva Inscripción Jornadas de Tecnificación*%0A%0A' +
                '*Nombre:* ' + nombre + '%0A' +
                '*Teléfono:* ' + telefono + '%0A' +
                '*Género:* ' + genero + '%0A' +
                '*Categoría:* ' + categoria + '%0A' +
                '*Duración:* ' + semanas + (semanas === '1' ? ' semana' : ' semanas');
  
  // Abrir WhatsApp con el mensaje
  window.open('https://wa.me/34690342138?text=' + mensaje, '_blank');
  
  // Opcional: Resetear el formulario
  form.reset();
  
  return false;
}

// Asegurarse de que el formulario tiene el manejador de eventos
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('inscripcionForm');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      enviarWhatsApp();
      return false;
    };
  }
});
