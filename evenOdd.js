/* Problem 2: Finding even or odd


তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 



এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:



Input: ‘Phero’

Output: odd



Input: ‘Batch7’

Output: even



Input: ‘chatgpt’

Output: odd

 */

//Answer2
/* This function takes a string as input.
 I found out the length of the total number of characters in the String and after modulating it with 2, I found out odd or odd. */
function evenOdd(inputString){


   if(typeof inputString !== 'string') {
      return "Input should be a string";
   }

  else if (inputString.length % 2==0){
    return 'even';
  } 
  else{
    return 'odd';
  }
}

 const result = evenOdd(-8);
 console.log(result);


