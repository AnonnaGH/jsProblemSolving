function mileToKm(miles){
    const kilometer =  miles * 1.609;
    return kilometer;
}

const rodMile = 165;
const roadkilometer = mileToKm(rodMile);
console.log(roadkilometer);