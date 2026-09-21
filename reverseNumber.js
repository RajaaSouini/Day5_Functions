//reverser un nombre
function reverser(n){
    let x = n % 10 ;
    let y = ((n % 100 ) - x)/10;
    let z = ((n % 1000) -x - y*10)/100  ;
    let u = parseInt(n / 1000);

    let result = x*1000 + y * 100 + z * 10 + u;

    return result;


}
console.log(reverser(1234));