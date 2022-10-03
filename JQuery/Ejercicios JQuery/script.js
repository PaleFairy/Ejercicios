$(document).ready(function () {
    
var vic=document.getElementById('nombre');
var nombre = $('#nombre').val();


$('#matarlo').click(function () {     
   
    var elemento = '<li><button class="btn" onclick="borrarLinea()"></button>' + nombre + '</li>';        
    $('#victimas').append(elemento);       
});

$('#perdonarlo').click(function () {         
    $('#victimas').empty();
               
});
$('.btn').click(function () { 
    $('#victimas li:nth-child(1)').empty();
    
});





});