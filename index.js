var notify = document.querySelector('.notify');
var btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    var num =  Number(notify.getAttribute('data-count') || 0);

    notify.setAttribute('data-count',num+1);
    
    if(num === 0){
        notify.classList.add('add-num');
    }
      
});