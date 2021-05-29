"use strict";
let age = 30;
const isFamous = true;
let famous;
function add(num1, num2) {
    return num1 + num2;
}
const summation = add(3, 5);
//console.log(summation)
function fullName(name, address) {
    return name + ' ' + address;
}
const user = fullName("ben", "rock");
//console.log(user);
const multiply = (x, y) => x * y;
const userDetails = () => {
    console.log(`user id is 12, name is muhit and age is 25`);
};
userDetails();
let calculation;
calculation = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, 'add'));
// Array
let friends = ['muhit', 'kawsar', 'jubu'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log(megaName);
// object
let player = {
    club: 'Real Madrid',
    salary: 50000
};
console.log(player.club, player.salary);
