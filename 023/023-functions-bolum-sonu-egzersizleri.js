// functions bolum sonu egzersizleri

let counter = Number(0)
let counterDOM = document.querySelector(`#counter`)
let increaseDOM = document.querySelector(`#increase`)
let decreaseDOM = document.querySelector(`#decrease`)

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click" , clickEvent)
decreaseDOM.addEventListener("click" , clickEvent)

// function clickEvent(){
//     console.log(this.id)
//     if(this.id=="increase"){
//         counterDOM.innerHTML ++
//     }
//     else {
//         counterDOM.innerHTML --
//     }
// }


// function clickEvent(){
//     console.log(this.id)
//     this.id=="increase" ? counterDOM.innerHTML = counter +=1 : counterDOM.innerHTML = counter -=1
// }

function clickEvent(){
    console.log(this.id)
    this.id=="increase" ? counter +=1 : counter -=1
    counterDOM.innerHTML = counter
}