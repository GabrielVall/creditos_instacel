// document ready
$(document).ready(function() {
    $(document).on('click', '#btn_next', function(){
        var nombre = $('#nombre').val();
        var apellidos = $('#apellidos').val();
        var email = $('#email').val();
        var telefono = $('#telefono').val();
        var direccion = $('#direccion').val();
        $.ajax({
            url: '../php/registro.php',
        })
    });
});