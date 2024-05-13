let a = +prompt("Son kiriting");

function dellar(son) {
     let res = prompt("juft yoki toq kiriting");
     for(let i = 1; i <= son; i++) {

          if(i % 2 == 0) {
               if(res === "juft") {
                    console.log(i)
               }
          }
          if(i % 2 !== 0) {
               if(res === "toq") {
                    console.log(i)
               }
          }
     }
}

let result =dellar(a);
document.wrrite(result)