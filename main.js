
var btn = document.querySelector('button');
var span = btn.querySelector('span');
var loader = document.createElement('span');

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
}

btn.addEventListener('click', btnClick);