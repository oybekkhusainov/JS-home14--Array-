let a = [2,3,4,8,1];
let b = [7,6,5,3,2];

function got (arr1, arr2) {
    let array = [];
    for(let i = 0; i<arr1.length; i++){

        for(let j = 0; j < arr2.length; j++){

            if(arr1[i]=== arr2[j]){
                array.push (arr1[i],arr2[j])
            }
        }
    }
    return array
}
    


let result = got(a, b)
document.write(result)



