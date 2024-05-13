
function theLastValue(arr) {




    let value = [];

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] ===  arr[arr.length-1]) {

            value.push(arr[i]);
        }
    }
    return value
}

let result = theLastValue([1,2,5,7,8,1,9,4,3,4]);

document.write("Bir xil elementlar: " + result)