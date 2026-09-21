function upperCaseFirstLetter(paragraph){
    let tableOfWords = paragraph.split(" ");
    let len = tableOfWords.length;
    for(i = 0 ; i < len ; i++){
         if (tableOfWords[i].length > 0) {
            tableOfWords[i] = tableOfWords[i].charAt(0).toUpperCase() + tableOfWords[i].slice(1);
        }
    }
    return tableOfWords.join(" ");
}
console.log(upperCaseFirstLetter("bonjour je suis rajaa souini"));