'use strict'

// ----ACCORDEON COMPONENT---- //

const arrowIconE = document.querySelectorAll('.icon');
const itemBoxE = document.querySelectorAll('.item');

// para elegir todas las clases con el mismo nombre y crear un click-event


arrowIconE.forEach(icon =>{
  icon.addEventListener('click', function(){
    icon.closest('.item').classList.toggle('open');  
  });
});