const nmbrInput = document.querySelector('#nmbrInput'),
     nmbrBtn = document.querySelector('#nmbrBtn')
     nmbrResult = document.querySelector('#nmbrResult')


const reg = /^\0|1|2 \d{13}$/


nmbrBtn.addEventListener('click',() =>{
if(reg.test(nmbrInput.value)){
    nmbrResult.textContent = "Correct"
    nmbrResult.style.color = "Purple"
} else {
    nmbrResult.textContent = "Wrong"
    nmbrResult.style.color = "Red"
}

})