module.exports = function () {
    return {
        add: function (num1, num2) {
            console.log("the sum is:", num1 + num2);
        },
        multiply: function (num1, num2) {
            console.log("the product is:", num1 * num2);
        },
        square: function (num) {
            console.log("the square is:", num * num);
        },
        random: function (num1, num2) {
            if(num1 < num2){
                console.log("the random number is:", Math.floor(Math.random() * num2) + num1);
            }
            else{
                console.log("Those numbers don't work at this time.")
            }
        }
    }
};
