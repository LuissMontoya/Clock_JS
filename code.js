const hourContainer = document.querySelector('.hour')
// const minutosContainer = document.querySelector('.minutos')
// const segundosContainer = document.querySelector('.segundos')


const updatehour = setInterval(function(){
    //const date = new Date()
    // let horas = date.getHours()
    // let minutos = date.getMinutes()
    // let segundos = date.getSeconds()
    // horaContainer.innerHTML = horas
    // minutosContainer.innerHTML = minutos
    // segundosContainer.innerHTML = segundos

    const date = new Date()
    //Refactorizado:
    hourContainer.innerHTML = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
}, 1000)

console.log(updatehour)
//clearInterval(actualizarHora)