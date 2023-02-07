/* Problem 1: Let’s play a mind game


তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")



এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

Sample Input & Output

Input: 5

Output: 7.5


Input: 50

Output: 75

Input: 33

Output: 49.5 */

//Answer 



/* This function takes a positive number as input.  Multiply the number by 3, then add 10, then divide the total by 2.  I got the result by subtracting 5 from the total.  Returned the result to the function. */
function mindGame(positiveNumber){
    if(typeof positiveNumber !== 'number' || positiveNumber < 0 ){
        return 'Input should be a positive number'
    }
    else{
        let total = positiveNumber*3;
        total = total+10;
        total =total/2;
       let result = total-5;
   
       return result;
    }
}

const result =mindGame(33);
console.log(result);