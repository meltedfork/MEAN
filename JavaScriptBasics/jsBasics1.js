// JS Basics - Part 1

// Basic 1
let x = [];
console.log(x);
x.push("coding", "dojo", "aight");
console.log(x);
x.pop([2]);
console.log(x);
// result is x = ["coding", "dojo"]

// Basic 2
const y = [];
console.log(y);
y.push(88)
console.log(y);
// result is y = [88]

// Basic 3
let z = [9, 10, 6, 5, -1, 20, 13, 2];
for(var idx = 0; idx < z.length; idx++){
    console.log(z[idx]);
}
// result is all array elements printed on separate lines
for(var idx = 0; idx < z.length - 1; idx++){
    console.log(z[idx]);
}
// result is all array elements except for the last one, printed on separate lines

// Basic 4
let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for(var idx = 0; idx < names.length; idx++){
    console.log(names[idx].length);
}
// result is length of each string is printed out
for(var idx = 0; idx < names.length; idx++){
    if(names[idx].length == 5){
        console.log(names[idx]);
    }
}
// result is only strings w length 5 are printed out

// Basic 5
function yell(string){
    return string.toUpperCase();
}
yell("banana");
// OR ES6 arrow func
let yell = (string) => { string.toUpperCase() };
yell("banana");
// Both result in "BANANA"