// Arrow function kullanimi

function hello(firstnameame) {
    console.log(`Merhaba ${firstnamename}`)
}

hello("JavaScript")

// 

const helloFuncV1 = (firstname) => { console.log(`Merhaba ${firstname}`) }
helloFuncV1("helloFuncV1")

// 

const helloFuncV2 = firstname => console.log(`Merhaba ${firstname}`)
helloFuncV2("helloFuncV2")

// 

const helloFuncV3 = (firstname, lastname) => console.log(
    `Merhaba ${firstname} ${lastname}`
)
helloFuncV3("helloFuncV3", "Last Name info")

// 

const helloFuncV4 = (firstname, lastname) => {
    console.log(`Merhaba ${firstname} ${lastname}`)
    console.log(info)
    return info
}
helloFuncV4("helloFuncV4", "Other Info")