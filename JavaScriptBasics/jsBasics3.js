// Javascript Basics - Part 3
// Math

// Math 1
// Write a function called zero_negativity(). 
// This function should take an array. 
// Return true if the input array contains no negative numbers, 
// return false if it does.

function zero_negativity(array){
    for(var idx = 0; idx < array.length; idx++){
        if(array[idx] < 0){
            return false;
        }
    }
    return true;
}

// Math 2
// This function should take a number. 
// Return true if the input number is even, 
// return false if the number is odd.
function is_even(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

// Math 3
// Write a function called how_many_even(). 
// This function should take an array. 
// Return the total number of elements in the array that are even. 
// You may call is_even() to solve this.

function how_many_even(array){
    var count = 0;
    for(idx = 0; idx < array.length; idx++){
        if(is_even(array[idx])){
            count++;
        }
    }
    return count;
}

// Math 4
// Write a function called create_dummy_array(). 
// This function should take a number n. 
// Return an array of random numbers between 0 and 9 with the length of n.

function create_dummy_array(n){
    var array = [];
    while(array.length < n){
        array.push(Math.ceil(Math.random()*10));
    }
    return array;
}

// Math 5
// Write a function called random_choice(). 
// This function should take an array. 
// Return a random element of the array, based on its length. 
// This function should never return undefined.

function random_choice(array){
    num = Math.ceil(Math.random()* array.length);
    return array[num];
}
