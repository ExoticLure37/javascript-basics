
const myArr = [12,1,3,14,134,53]

console.log(myArr[2]);                  //prints the val at index 2
console.log(typeof myArr);

const myArr2 = new Array (1,2,3,4,5,6,7,8,9,10)             //another way to create an array

console.log(myArr2[3]);

myArr.push(19);                 //add at the last
myArr.unshift(23);              //add at the begining
myArr.shift();                  //removes first element


const newArray = myArr.join();
console.log(typeof newArray);
console.log(myArr);