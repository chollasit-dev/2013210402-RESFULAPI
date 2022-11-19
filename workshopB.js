const data = [
    {name: "Chollasit",
    nickname: "Chin",
    hobby: "Sleep",
    address: {
        province: "Bangkok",
        postcode: 10250
        }
    },
    {name: "Student1",
    nickname: "Stu1",
    hobby: "Eat",
    address: {
        province: "Bangkok",
        postcode: 10251
        }
    },
    {name: "Student2",
    nickname: "Stu2",
    hobby: "Walk",
    address: {
        province: "Bangkok",
        postcode: 10252
        }
    }
]
for (const d of data){
    console.log(`My nickname is ${d.nickname}, My hobby is ${d.hobby}, and my postcode is ${d.address.postcode}.`)
}