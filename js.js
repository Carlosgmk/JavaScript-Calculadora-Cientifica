const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const mostrador = document.getElementById('mostrador')
const limpar = document.getElementById('limpar')
const igual = document.getElementById('tigual')
const cpy = document.getElementById('tmaisomenos')
const aba = document.getElementById('calc_aba')
const tecla = document.getElementById('teclas')
const pCientifica = document.getElementById('pCientifica')

const nmrs = [1,2,3,4,5,6,7,8,9,0]

let sinal = false
let decimal = false

nmrs.forEach((el, indice)=>{
     let buton = document.createElement('button')
     buton.classList.add('tecla')
     buton.classList.add('num')
     buton.setAttribute('id', 't' + (indice))
     buton.textContent = el
     tecla.appendChild(buton)
})

teclasNum.map((el)=>{
     el.addEventListener('click',(evt)=>{
          sinal = false
          if(evt.target.innerHTML===','){
               if(!decimal){
                    decimal = true
                    if( mostrador.innerHTML=='0'){
                         mostrador.innerHTML = '0,'
                    } else{
                         mostrador.innerHTML += evt.target.innerHTML
                    }
               }
          } else{
               if(mostrador.innerHTML === '0'){
                    mostrador.innerHTML=''
               }
               mostrador.innerHTML += evt.target.innerHTML
          }
     })
})

teclasOp.map((el)=>{
     el.addEventListener('click',(evt)=>{
          if(!sinal){
               sinal = true
               if(mostrador.innerHTML === '0'){
                    mostrador.innerHTML=''
               }
               if(evt.target.innerHTML==='x'){
                    mostrador.innerHTML += '*'
               }else{
                    mostrador.innerHTML += evt.target.innerHTML
               }
               
          }
          
     })
})

limpar.addEventListener('click', (evt)=>{
     sinal= false
     decimal= false
     mostrador.innerHTML='0'
})

igual.addEventListener('click', (evt)=>{
     sinal= false
     decimal= false
     const res = eval(mostrador.innerHTML)
     mostrador.innerHTML = res
})

cpy.addEventListener('click',(evt)=>{
     navigator.clipboard.writeText(mostrador.innerHTML)
})

pCientifica.classList.add('disappear');
aba.addEventListener('click', (evt) => {
     pCientifica.classList.toggle('pCientifica');
     pCientifica.classList.toggle('disappear');  
     
     if(pCientifica.classList.contains('pCientifica')){
          aba.innerHTML = '<'
          
     } else{
          aba.innerHTML = '>'
          
     }
 })
 
