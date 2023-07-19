// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Lutfen Adinizi Giriniz: ")

let line = document.querySelector("#line")

line.innerHTML = `${line.innerHTML} <small style="color:red">${fullName}</small>`
