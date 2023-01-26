$(document).ready(function(){
    $('.sector1').hover(function () {
            swal('Hola!',
                'Esta es el área de recreación')
        }
    );
    $('.sector2').hover(function() {
            $(this).append($('<div class="alert alert-primary" role="alert">Esta es la sala de reuniones</div>'))
        },function() {
            $(this).find('div').last().remove();
        }
    );
    $('.sector3').hover(function() {
      $(this).addClass('visually-hidden' ) ;
    })
    $('#sector4').hover(function(){
        $(this).toggleClass('bg-primary rounded-0');
    })
})
