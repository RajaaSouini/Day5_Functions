function maxOfthreeValues(a , b , c){
    let max = a;
    if (b > a && b > c){
        max = b ;
    }else if (c > a && c > b){
        max = c;
    }
    return max;
}
console.log("le maximum est : ", maxOfthreeValues(8,9,2));