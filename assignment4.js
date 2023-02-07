//----------------Solution-1-----------



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




//-----------Solution-2-----------

/* This function takes a string as input.
 I found out the length of the total number of characters in the String and after modulating it with 2, I found out odd or odd. */


 function evenOdd(inputString){

    if(typeof inputString !== 'string') {
       return "Input should be a string";
    }
 
   else if (inputString.length % 2 == 0){
     return 'even';
   } 
   else{
     return 'odd';
   }
 }




 //-----------Solution-3-----------

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
      return "please provide valid number"
   }
}


 //-------------Solution-4-----------

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



 //-------------Solution-5-----------


 /* This function takes three input number  which is gems number.Then gems are converted to diamond by multiply specific conversion power.If the total number of diamonds are more than 2000, I have subtracted 2000 from the total and returned the result. */


function gemsToDiamond(num1,num2,num3) {

    const friend1Diamonds = num1 * 21;
    const friend2Diamonds = num2 * 32;
    const friend3Diamonds = num3 * 43;
    const total =  friend1Diamonds + friend2Diamonds + friend3Diamonds;
    
    if(num1 < 0 || num2 < 0 || num3 < 0 || typeof num1 !== 'number' || typeof num2 !=='number' || typeof num3 !== 'number') {
        return "Input should be positive number";
       }

    else if(total < 1000*2){
        return total;
    }
    else if (total >= 1000*2){
        const result = total - 2000;
        return result;
   }
   
}
