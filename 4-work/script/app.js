let num  =  prompt("Son kirgizing: ")


function debl (simbl){
    let sum =[]
    for(let i = 0; i< simbl.length; i++  ){
        sum.push(simbl[i])
    }
    
    return sum 

}
let result = debl(num)  
console.log(result)
console.log("\n ----------------")


let nun  =  prompt("Son kirgizing: ")


function lebl(der){ 
    let nam =[]
    for(let i  = 0; i <der; i++){
        nam.push(i)
    }
    return nam
}
let restsrt = lebl(nun);
console.log(restsrt)
