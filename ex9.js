function safeDivide(a, b){
    let result = a / b;;
    if (b === 0){
        return "can't divide by 0";
    }
    return result;
}
console.log(safeDivide(3,0))