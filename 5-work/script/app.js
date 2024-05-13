let dem = prompt("Kerakli son kiriting: ")

function func(idan){
    let sum = []
    for( let i = 0; i <= idan; i++){
            sum.push(i)
            console.log(sum)
    }
    return sum.reduce((a, b) => a + b)
}
let result = func(dem)
console.log(result)
