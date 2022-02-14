
// function testNum(num1,num2) {
//     if (num1 > num2) {
//       alert(num1)
//     } else if(num2>num1){
//       alert(num2)
//     }
//     else{}
// };
// testNum(num1,num2);

// const firstName = prompt("what is your frist name");
// console.log(firstName);
// const firstNameSplit =  firstName.split("");
// console.log(firstNameSplit)
// const firstNameReverse = firstNameSplit.reverse();
// console.log(firstNameReverse);
// const firstNameJoin = firstNameReverse.join("");
// console.log(firstNameJoin);

// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string

// const firstName  = prompt('what is your firt name?');
// console.log(firstName);
// const nameArray = firstName.split('');
// console.log(nameArray);
// const reverseName = nameArray.reverse();
// console.log(reverseName);
// const reversedName = reverseName.join('');
// console.log(reversedName);



// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result


// let number1 = prompt('give me a number between 1 and 10', '10');
// let number2 = prompt('give me a number between 1 and 10', '10');

// let number1Parse = parseInt(number1);
// let number2Parse = parseInt(number2);

// console.log(typeof number1Parse, typeof number2Parse);

// alert(number1Parse + number2Parse);

   // day four challange//
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number
const num1 = prompt("please provide  number one", "10");
const num2= prompt("please provide  number two", "10");

const num1Parse = parseInt(num1);
const num2Parse = parseInt(num2);

    if (num1Parse > num2Parse) {
    alert(num1Parse);
    } 
    else if(num2Parse>num1Parse){
        alert(num2Parse);
    }
    else{};


// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number

    // if (typeof num1 !== "number") {
    //     prompt("Please enter a number value") ;
    //   }


