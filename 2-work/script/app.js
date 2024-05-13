function stringLength(str) {
    let stringtext = []
    for(let i = 0; i<str.length; i++){
        if(typeof str[i] === "string"){
            stringtext.push(str[i])
        }


    }
  return stringtext

}
let rever = stringLength([1,2,3,6,343,"hello","world","good"]);
document.write(rever);

