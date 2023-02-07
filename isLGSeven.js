/* Problem 3: Is Less or Greater than seven


তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  



এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

Input : 6

Output: -1

Input: -15

Output: -22

Input: 15

Output: 30 */

//answer3
/* This function takes a number as input.  I have subtracted 7 from the number and kept it in the remainder.  If the remainder is greater than 7, the remainder is returned and if the remainder is greater than 7, the input number is multiplied by 2 and is returned. */
function isLGSeven(number){
    let remainder = number - 7;
    
    if(remainder < 7){
       return remainder;
    }
   else if(remainder >7){
    return number * 2;
   }
   else{
      return "please provide valide number"
   }
}

const result = isLGSeven(15);
console.log(result);