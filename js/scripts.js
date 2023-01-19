window.addEventListener('DOMContentLoaded', event => {

    // Activar ScrollSpy
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

});

// Ventana modal
var modal = document.getElementById('ventanaModal');
// Botón que abre el modal
var boton = document.getElementById('submitButton');
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var cerrar = document.getElementById('botonCerrar');

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var cerrarAbajo = document.getElementById('botonCerrarGrande');

// Cuando el usuario hace clic en el botón, se abre la ventana
boton.addEventListener('click', function() {
    modal.style.display = "block";    
    console.log("entro");
});
  // Si el usuario hace clic en la x, la ventana se cierra
cerrar.addEventListener('click', function() {
    modal.style.display = "none";
});
cerrarAbajo.addEventListener('click', function() {
    modal.style.display = "none";
});

  // Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

/*document.getElementById('submitButton').addEventListener('click', function(){
    console.log("Hizo Click");
    $('#portfolioModal2').modal({ show:true });
});*/