function getSum(num) {
    let sum =[];
    for( let i = 0; i< num.length; i++){
        if(num[i] % 2 !== 0){
            sum.push(num[i])
            console.log(sum)
        }
    }
    return  sum
}

let result = getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
document.write(result)