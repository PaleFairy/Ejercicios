var btn = document.getElementsByTagName('button');
var span = document.getElementsByTagName('span');


    for (let i = 0; i < span.length; i++) {
        btn.addEventListener('click', function(){
        span[i].style.color ='red';
    })
}

    
 