// ********** let ve const ile Degisken Tanimlama ********** 

// var ile degisken tanimlamak:
// var serverName = "api.kodluyoruz.org"
// console.log(serverName)

// let ile degiskeni bos tanimlamak:

let serverName;
console.log(serverName)

// let ile degiskene bilgi atamak
serverName= "berkayocer.com"
console.log(serverName)

// let ile degiskene bilgi atayarak tanimlamak
let password = "141103";
console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak

/* HATALI KULLANIM:
console.log(fullName)
let fullName= "Berkay Ocer";

*/

let fullName= "Berkay Ocer";

// let ile tanimlanan degiskenin icindeki biligiyi degistirmek:

fullName= "Lorem Ipsum Dolor"
console.log(fullName)

// birlestirme veya ekleme islemi
fullName+"Yeni Eklenen Bilgi"
console.log(fullName+" Test bilgisi") // ekle ve goster ama degiskene eklemedik

fullName = fullName = " yeni bilgi"
fullName = " 2: bilgi : " +fullName

fullName = " Sifirlandi"
fullName += " ve Yeni Bilgi Eklendi"
console.log(fullName)

// const ile degiskeni bos tanimlamaya calismak 
// const serverPassword; // sadece degisken tanimlandi ama ici bos???

// const ile degisken tanimlamak:

const SERVER_PASSWORD = "yarenicokseviyorum"
console.log(SERVER_PASSWORD)

// SERVER_PASSWORD = "yarenicokseviyorum"
// console.log(SERVER_PASSWORD)