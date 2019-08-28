
var btn = document.querySelector('button');
var span = btn.querySelector('span');
var loader = document.createElement('span');

var checkIconPath = document.querySelector('.check-icon path');

function btnClick () {
    if(btn.classList.contains('circle')){
        return;
    }

    btn.classList.add('circle');
    span.classList.add('fade');

    loader.classList.add('loader');
    btn.appendChild(loader);

    setTimeout(function() {
        loader.classList.add('fade-in');
    }, 500);

    /*for(let i = 400; i < 800; i += 10){
        checkIconPath.style.strokeDashoffset = i;
    }*/

    var count = 0;
    var intervalId = setInterval(function() {
        checkIconPath.style.strokeDashoffset = count + 400;
        count += 10;
        if(count >= 400){
            clearInterval(intervalId);
        }
    }, 16);
}

btn.addEventListener('click', btnClick);