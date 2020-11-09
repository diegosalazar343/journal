function Journal(title, body){

}

//counts amount of words
function counting (words){
  return words.split(" ").length;
}
// counts amount of Vowels
function countVowels(str) {
  return str.match(/[aeiou]/g).length;

}
function countCon(str) {
  return str.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
} console.log(countCon("Hello world"));
