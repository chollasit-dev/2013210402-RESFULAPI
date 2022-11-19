let user = {
    name: "Chollasit",
    nickname: "Chin",
    hobby: "Sleep",
    address: {
        province: "Bangkok",
        postcode: 10250
    }
}

const display = () => {
    const {name, nickname, hobby, address: {province, postcode}} = user
    return `My nickname is ${nickname}, My hobby is ${hobby}, and my postcode is ${postcode}.`
}
console.log(display())