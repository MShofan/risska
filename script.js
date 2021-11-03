const txtElement = ['~ Muhammad Shofan ~'];
let count = 0;
let txtIndex = 0;
let currentTxt='';
let words = '';

(function Ketik(){
   if(count == txtElement.length){
       count = 0;
   } 
   currentTxt = txtElement[count];
   words = currentTxt.slice(0,++txtIndex); 
   console.log(words);
   document.querySelector('.Ketik').textContent = words;
   
   if(words.length== currentTxt.length){
    count++;
    txtIndex = 0;
   }
   setTimeout(Ketik,200 );
})();