function longuestWord(paragraph){
    let arr = paragraph.split(" ");
    let len = arr.length;
    let loguestWord = arr[0];
    for(i = 1 ; i < len ; i++){
        if(arr[i].length > longuestWord.length){
            loguestWord = arr[i];
        }

    }
    return loguestWord;
}
console.log(longuestWord("je suis Rajaa Souini et je suis développeuse"));