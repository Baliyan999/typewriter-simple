const title = document.querySelector('.title');
title.textContent = `https://github.com/Baliyan999?tab=repositories`;
function typing(elem, dur){
    const text = elem.innerText;
    elem.innerHTML = '';
    let index = 0;
    function type(){
        if(index < text.length){
            elem.innerHTML += text[index];
            index++;
            setInterval(type, dur);
        }
    }
    type();
}
typing(title, 50);