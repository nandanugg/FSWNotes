let user = {
    name: "Near",
    age: 19,
    greet() {
        return `hajimemasite, watashi wa ${this.name}, ${this.age} desu.` // this is in object which is user, using this will work also user too
    }
}
console.log(".greet():", user.greet());
let string = " this is string";
console.log(".toUpperCase()", string.toUpperCase());
let number = 6.6742;
console.log(".toFixed()", number.toFixed(1));

// array have many method
let friends = ['Near', 'Mello', 'L', 'Kira'];
console.log(".join()", friends.join());
console.log(".includes()", friends.includes('L'));
// case: to check item in tokopedia
console.log(".map()", friends.map((friend) => {
    console.log(friend);
    return `${friend} bot`
}))
// need call back function
// map is loping
// anonymous function will be call/execute every item in array 
// if not with return -> map . will get undefined because map really needs map
// object also have method but make new in ourself
// boolean doesnt have method
