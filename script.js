let toggle = document.getElementById('nav-toggle');
let navigation = document.getElementById('navigation');

toggle.addEventListener('click',function(){

    if(navigation.style.display === (navigation.style.display = 'flex')){
        navigation.style.display ='none';
    }else{
        navigation.style.display = 'flex'
    }
});