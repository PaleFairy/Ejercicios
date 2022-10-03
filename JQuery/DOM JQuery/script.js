$(document).ready(function () {

    //GET
    $('#btnTexto').click(function () { 
        alert($('#pEjemplo').text())        
    });
    $('#btnHTML').click(function () { 
        alert($('#pEjemplo').html())        
    });

    //SET
    $('#btnSet').click(function () { 
        $('#pEjemplo').html('Este párrafo contiene <i> texto </i> en cursiva.')       
    });

    //GET Attr
    $('#btnGAttr').click(function () { 
        var atributo=$('a').attr('href');
        $('pAttrPrint').text(atributo)
        alert(atributo)        
    });

    //SET Attr
    $('#btnSAttr').click(function () {         
        $('a').attr({
            'href': 'https://www.bing.es/'
        })        
    });

    //Append
    $('#btnAppend').click(function () { 
        $('#pAppend').append('<b>con texto añadido </b>');
        $('#ulAppend').append('<li><b>Elemento añadido </b></li>');        
        $('#ulAppend li:nth-child(1)').append('<li><b>Elemento añadido </b></li>');        
    });
    $('#btnAppend2').click(function () { 
        var txt1 = ' <b>'
        var txt2 = 'con texto'
        var txt3 = ' añadido</b>'
        $('#pAppend').append(txt1 + txt2 + txt3);
        // insertar li con texto plano
        var ul1 = '<li><b>Elemento añadido</b></li>'
        //crear li con JQuery
        var ul2 = $('<li></li>').text('<li><b>Elemento añadido</b></li>')
        //crear li con DOM vanilla
        var ul3 = document.createElement('li');
        ul3.innerHTML = '<li><b>Elemento añadido</b></li>'
        $('#ulAppend').append(ul1, ul2, ul3);     
    });

    //remove/empty
    $('#btnRemove').click(function () { 
        $('#ulAppend').remove();        
    });
    $('#btnEmpty').click(function () { 
        $('#ulAppend').empty();        
    });


});