let count = 0;
const compteur = () => count += 1 ;
function makeCounter(){
    return compteur();
}
console.log(makeCounter());
console.log(makeCounter());
console.log(makeCounter());
console.log(makeCounter());