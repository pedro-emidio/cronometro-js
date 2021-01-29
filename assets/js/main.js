function getTime(segundos){
  const data = new Date(segundos*1000)
  return data.toLocaleTimeString('pt-BR',{
      hour12: false,
      timeZone: 'UTC'
  })
}

const relogio = document.querySelector('.relogio')
const start = document.querySelector('.start')
const stopTimer = document.querySelector('.stop')
const restart = document.querySelector('.restart')

let segundos = 0
let timer

function iniciaRelogio(){
    timer = setInterval(function(){
    segundos++
    relogio.innerHTML = getTime(segundos)
  }, 1000)  
}

start.addEventListener('click', function(){
  relogio.classList.remove('pausado')
  clearInterval(timer)
  iniciaRelogio()
})

stopTimer.addEventListener('click', function(){
  relogio.classList.add('pausado')

  clearInterval(timer)
})

restart.addEventListener('click', function(){
  relogio.classList.remove('pausado')
  clearInterval(timer)
  segundos = 0
  relogio.innerHTML = getTime(segundos)
})