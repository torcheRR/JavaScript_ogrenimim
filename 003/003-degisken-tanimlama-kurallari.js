// ********** Degisken Tanimlama Kurallari  ********** 

// ### Degisken Genel Tanimlama Kurallari:
// camelCase Kullanimi:

let fullname = "" // bu dogru bir kullanim degil
let kodluyoruzserverinfo = "" // bu dogru bir kullanim degil
let kodluyoruz_server_info = "" // bu dogru bir kullanim degil
let fullName = "" 
let kodluyoruz_Server_Info = "" // bu dogru :D
let kodluyoruzSERverInfo = "" // bu dogru bir kullanim degil

// let firstName= "Berkay", lastName = "Ocer"

let firstName = "Berkay"
let lastName = "Ocer"
console.log(firstName,lastName)

// UPPER_CASE Kullanimi:

const password = "berkay123" // bu dogru bir kullanim degil
const PASSWORD = "berkay123" // dogru kullanim
const SERVER_PASSWORD = "berkay123"

// degiskenlerde turkce ve diger dillerin kullanimi

let türkçeBilgi = 'Türkçe Bilgi Yazdırılıyor..' // bu dogru bir kullanim degil

let info = 'Türkçe Bilgi Yazdırılıyor..'
console.log(info)

// Anlamsiz degisken adlari kullanma!!
//  https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered
// When I wrote this, only god and i understood what i was doing
// now, god only knows

let x = 1 // bu dogru bir kullanim degil

// x, y, z, k, i, e gibi anlamsiz degisken isimlerini kullanmamaya calis (anlasilabilirlik yonunden basklalari da anlayabilsin diye)


// ### ek bilgi:
// 1: boolean tanimlarken is/has kullanimi:

let isActive = true
let hasPassword = false

// 2: line height should be <80