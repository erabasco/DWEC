$(() => {
    $('#botonA').click(() => {
        $('#capa').html('Has hecho clic en el botón <b>A</b>');
    });
    $('#botonB').click(() => {
        $('#capa').html('Recibido un clic en el botón <b>B</b>');
    });
})