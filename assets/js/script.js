
// función Bootstrap para aplicar los tooltips definidos en toda la página
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function() {
    
    // // simula el envío de un email al presionar el botón
    // $( "#enviarCorreo" ).click(function() {
    //     alert("El correo fue enviado correctamente");
    // });

    // // cambia el color de las letras de una sección específica al hacer doble-click
    // $( ".content h3").on( "dblclick", function() {
    //     var elem = $(this);
    //     elem.css("color", "red");
    // });

    // // hace aparecer/desaparecer el contenido de una tarjeta
    // $( ".card-title ").on( "click", function() {
    //     var card = $(this);
    //     card.next(".card-text").toggle();
    // });

});