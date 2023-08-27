let users=["berkay", "tolga", "batuhan"]
let userdom= document.querySelector("#userlist")
for(index=0; index<users.length;index++){
    const lidom=document.createElement('li')
    lidom.innerHTML =users[index]
    userdom.appendChild(lidom)
}