const JsUser0 = {
    name: "Aryan Maurya",
    "family relations": ["son","brother"],
    email: "abc@gmail.com",
    phone: 9272418337,
    address: "jason momoa apartment",
    isMember: false,
    lastLoginDays: ["friday","sunday"]
}

console.log(JsUser0.email);      //can be accessed
// console.log(JsUser0."family relations");      can't be accesses like this
// for this we will use below method 
console.log(JsUse0r["family relations"]);


// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());