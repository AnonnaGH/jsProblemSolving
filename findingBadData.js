/* Problem 4: Finding Bad data


তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।



Sample Input & Output:-



Input: [ 1,2,5 ]

Output: 0



Input: [ 2, -5, -7, -13 ]

Output: 3



Input: [ -4, -9, -5, -33, -55 ]

Output: 5



 */

//answer2
/* An array is taken as input in this function. The number of negative values ​​in the array is extracted. */

function findingBadData(numbers) {
    
    if(Array.isArray(numbers)!= true){
        return 'Input should be an  array';
    }

    else {
    let data = 0
    for(let i = 0; i <numbers.length; i++){ 
        const element = numbers[i];
        
        if(element < 0){
            data = data + 1;
           
        }
       
    }
    return data;
}

}

const result = findingBadData(10);
console.log(result);