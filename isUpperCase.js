function Check() {
   let stri = document.getElementById('word').value;
      isFirstLetterUpperCase(stri);
   }
function isFirstLetterUpperCase(a) {
   console.log(a);   let regexp = /^[A-Z]+/;
    if (regexp.test(a)) {
       document.getElementById('result').innerHTML = 'String\'s first character is uppercase';
    } else {
      document.getElementById('result').innerHTML = 'String\'s first character is not uppercase';
    }
 }