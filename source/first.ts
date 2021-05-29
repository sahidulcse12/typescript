let age: number = 30;
const isFamous: boolean = true;
let famous: boolean;


function add(num1: number, num2: number): number {
    return num1 + num2;
}

const summation: number = add(3, 5);
//console.log(summation)


function fullName(name: string, address: string): string { //output er string
    return name + ' ' + address;
}

const user: string = fullName("ben", "rock");
//console.log(user);


const multiply = (x: number, y: number): number => x * y;
//console.log(multiply(5, 10));

type stringOrNumber = (string | number);
type userType = { name: string; age: number }

const userDetails = () => {
    console.log(`user id is 12, name is muhit and age is 25`)
}

userDetails();


let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) => {
    if (c === 'add') {
        return a + b;
    } else {
        return a - b;
    }
}

console.log(calculation(5, 6, 'add'));


// Array

let friends: string[] = ['muhit', 'kawsar', 'jubu'];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    let friend: string = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}

console.log(megaName)


// object

let player: {
    club: string,
    salary: number
} = {
    club: 'Real Madrid',
    salary: 50000
}

console.log(player.club, player.salary)