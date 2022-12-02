let num = 266219;
let array = ("" + num).split("").map(Number).reduce((acc, rec) => acc * rec);
console.log(array);
let array2 = array**3;
console.log(String(array2).slice(0, 2));





