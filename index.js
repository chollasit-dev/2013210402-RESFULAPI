// const datefns = require('date-fns')
// console.log(datefns.format(new Date(), "MM/dd/yyyy"))



// let firstName = "Chollasit"
// let age = 16
// console.log(firstName + age)    //Old-School

// let info = `
//     My name is ${Chollasit}
//     My age is ${16}
// `
// console.log(info)



const user = {
    name: "Chollasit",
    salary: 500000,
    address: {
        province: "Bangkok",
        postcode: "10250"
    }
}
// console.log(user.salary)
// console.log(user.address.postcode)



// const showData1 = () => `${user.name}`
// console.log(showData())

// const showData2 = () => {
//     let info = 'My name is '
//     return `${info} ${user.name}`
// }

// const sumNumber = (a,b) => a+b
// console.log(sumNumber(1,2))



const {name, salary} = user
console.log(name)