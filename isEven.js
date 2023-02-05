function isEven(number){
    const remainder = number %2;
    if(remainder == 0){
       return true;
    }
    else{
        
        return false;
    }

   
}

const num1= 101;
const output = isEven(num1);
console.log(output);