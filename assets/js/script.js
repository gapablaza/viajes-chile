
// función Bootstrap para aplicar los tooltips definidos en toda la página
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// función Bootstrap para aplicar los popovers definidos en toda la página
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

$(function() {
    
    // Simular el envío del formulario de contacto
    $('#contact-form').submit(function(event) {
        event.preventDefault();
        $(this).trigger("reset");;
        alert('Mensaje enviado exitosamente! (simulación)');
    });

});