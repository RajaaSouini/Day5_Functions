function isInRange(a){
    let isIn = false;
    if (a >= 1 && a <= 100 ){
        isIn = true;
    }
    return isIn;
}
console.log(isInRange(200));
console.log(isInRange(20));