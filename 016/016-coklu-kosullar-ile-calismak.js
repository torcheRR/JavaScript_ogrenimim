// ********** Coklu Kosullarla Calismak **********

let userName = prompt("Kullanici Adiniz:")
let age = prompt("Yasiniz:")
let info = document.querySelector("#info")

if (userName && age >= 18){
    info.innerHTML = "Ehliyet alabilirsiniz"
}
else if(!userName){
    info.innerHTML = "Kullanici Adiniz Yok!"
}
else if(age<18){
    info.innerHTML = "Yas bilginiz yok veya yasiniz 18'den kucuk"
}