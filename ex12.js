function isEven(n){
    if (n % 2 === 0){
        console.log("is even");
    }
}
function isOdd(n){
    if(n%2 !== 0){
        console.log("is odd");
    }
}
function describeParity(n){
    isEven(n);
    isOdd(n);
}
describeParity(6);