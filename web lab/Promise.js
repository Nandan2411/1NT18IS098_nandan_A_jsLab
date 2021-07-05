let a = 5
let p = new Promise(function(resolve, react) {
    if (a == 5) { resolve('Success') } else { react('Failure') }

})

console.log(p)
    //promise chaining
p.then((message) => { //success callback
    console.log(message + ' then is executed')
}).catch((result) => { //failure callback
    console.log(result + ' catch is executed')
})