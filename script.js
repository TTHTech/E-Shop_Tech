const adressbtn = document.querySelector('#adress-form')
const adresscl = document.querySelector('#adress-close')

adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex";
})


adresscl.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none";
})