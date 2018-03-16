let newArr1 = [21, 33, 44, 66];
let newArr2 = newArr1.slice();
console.log(newArr2);

console.log(JSON.stringify(newArr1) === JSON.stringify(newArr2));
