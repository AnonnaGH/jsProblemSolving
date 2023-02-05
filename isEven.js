function isEven(number){
    const remainder = number %2;
    if(remainder == 0){
        console.log('Even');
    }
    else{
        console.log('Odd');
    }

    return isEven;
}

const num1= 101;
const output = isEven(num1);
console.log(output);