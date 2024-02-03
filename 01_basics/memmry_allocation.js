let abc = "hello";
let def = abc;

console.log(abc);
console.log(def);

def = "world";

console.log(abc);
console.log(def);

let userOne = {
    email: "acb@gmail.com",
    id: 123
}

let userTwo = userOne;

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "xyz@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);