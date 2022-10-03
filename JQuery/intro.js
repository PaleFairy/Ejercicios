/* Una buena práctica es introducir todo el código en esta función
esto previene que el código se ejecute antes de que el documento cargue
También permite enlazar el JavaScript antes del body en el documento HTML*/

$(document).ready(function(){
    //todo el código JQuery va aquí
    //Al hacer en CUALQUIER botón...

    /*$('button').click(function(){
        $('span').css('color', 'red');        
    })

    $('p').mouseenter(function(){
        $('p').css('color', 'green')
    })

    $('p').mouseleave(function(){
        $('p').css('color', 'blue')
    })

    $('p').click(function(){
        $('p').css('color', 'red')
    })*/

    //o lo que es lo mismo para asignarle varios eventos al mismo selector
    $('p').on({
        mouseenter: function () {
            /*el this hace referencia al elemento sobre el que está en ese momento,
            o sea que en lugar de aplicarlo sobre todos a la vez lo puedas aplicar
            de uno en uno*/
            $(this).css('color', 'green');
        },
        mouseleave: function(){
            $(this).css('color', 'blue');
        },
        click: function(){
            $(this).css('color', 'black');
        },
        dblclick: function(){
            $(this).css('font-weight', 'bold');
                }        
    });

    $('#btnHide').click(function () {
        //hide() tiene dos parámetros
            //ms de animación
            //callback, que se ejecuta después del hide
        $('p').hide(function () {
            
          });
    })
    
    $('#btnShow').click(function () {
        $('p').show(1000);
        $('p').removeAttr('style');
    });
  
    $('#btnMenu').click(function () {
        $('#container').toggle(1000, function () {/*aquí metemos la función
        después de toggle con un retraso porque si no, la alerta interrumpe la animación
        (función callback)*/
            alert('El menú ha cambiado de visibilidad');
            console.log('menu'); 
        });
        
      });

    $('#btnAniMenu').click(function () {
        /*si la propiedad es compuesta, hay que quitarle el guión
        y las animaciones se ejecutan de una en una en orden*/
        $('#container').animate({
            top:'95%'                                  
        });
        $('#container').animate({
            top:'0'                                  
        },2000);
        
    })
    
   /* $('#btnChain').click(function () {
        $('divChain').css('background-color','red');
        $('divChain').slideDown(1500);
        $('divChain').slideUp(1500);
        $('divChain').hide(1500);
    })*/

    $('btnChain').click(function (){
        $('divChain').css('background-color', 'red')
        .slideUp(1500)
        .slideDown(1500)
        .hide(1500)
    })


})