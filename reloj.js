function reloj() {
    let div = document.getElementById("reloj");

    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    // let format = "AM";

    // if (horas>12) {
    //     horas = horas - 12;
    //     format = "PM";        
    // }
    
    if (horas<10) {
        hours = "0" + horas;
    }
    if (minutos<10) {
        minutos = "0" + minutos;
    }
    if (segundos<10) {
        segundos = "0" + segundos;
    }
    div.innerHTML= horas + " : " + minutos + " : " + segundos /*+ " " + format*/;

    setTimeout(reloj, 1000);
}
reloj(); //Ejecuta la función en la carga de la página

function showdate(){

    let div = document.getElementById("divDia");
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let weekday = date.getDay();

    const dia = [
        "Lunes", "Martes", "Miércoles", "Jueves", "Viernes",
         "Sábado", "Domingo"
    ]
    const mes =[
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre",
        "Octubre", "Noviembre", "Diciembre"
    ]

    div.innerHTML= "Hoy es " + dia[weekday-1] + ", " + (month+1) + 
        " " + mes[month] + " de " + year;
}    
showdate();