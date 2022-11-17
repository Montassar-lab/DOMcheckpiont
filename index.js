var btnsPlus = document.querySelectorAll('.plus')

for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener('click', function () {
    btnsPlus[i].previousElementSibling.innerText++
    sommetotal()
    
  })
}

var btnsMoins = document.querySelectorAll('.moins')

for (let i = 0; i < btnsMoins.length; i++) {
  btnsMoins[i].addEventListener('click', function () {
    if (btnsMoins[i].nextElementSibling.innerText > 0) {
      btnsMoins[i].nextElementSibling.innerText--
      sommetotal()
      
    }
  })
}




// remove one function 
var par = document.querySelectorAll('.removearticle')

for (let i=0;i<par.length;i++){
  par[i].addEventListener('click', function () {
    par[i].parentNode.remove()
    sommetotal()
  })
}


var like = document.querySelectorAll('.fa-heart')

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener('click',function(){
    like[i].classList.toggle('hear')
  }) 
}

function sommetotal(){
  var px = document.querySelectorAll('.soustotal')
  var qte = document.querySelectorAll('.T2')
  var S = 0
  var sum = document.querySelector('#PT')

  for (let i = 0; i < qte.length; i++) {
    var S = S + qte[i].innerText*px[i].innerText
    
  }
  sum.innerText = S
}
