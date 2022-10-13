const input = document.querySelector('.inputs'),
resetGame = document.querySelector('.resetGame'),
hint = document.querySelector('.hint span'),
typing = document.querySelector('.typing-inp'),
wrongLatter = document.querySelector('.wrong-letters span'),
guesWord = document.querySelector('.guesses span');

let word; let inccorect = []; let correct = []; let maxGuess;

function randomText(){
let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
console.log(ranObj);
 word = ranObj.word; 
 maxGuess = 8;   inccorect = []; correct = [];


hint.innerText = ranObj.hint;
wrongLatter.innerText = inccorect;
guesWord.innerText = maxGuess;

let html = '';

for(let i = 0; i< word.length;i++){
    html += `<input type ="text" disabled>`;
}
input.innerHTML = html;
}
randomText();

function initGame (e){
let init = e.target.value;

if(init.match(/^[A-Za-z]+$/)&& !inccorect.includes(`${init}`)
&& !correct.includes(init)){ 
    console.log(init);
    
if(word.includes(init)){
   for(let i =0; i<word.length;i++){
    if(word[i]=== init){
        correct.push(init);
        input.querySelectorAll('input')[i].value = init;
    }
   }  
}else{
    maxGuess--;
    inccorect.push(`${init}`);
}
wrongLatter.innerText = inccorect;
guesWord.innerText = maxGuess;
}
typing.value = '';

if(correct.length === word.length){
alert(`Congrats!!  you guessed the word ${word.toUpperCase()}`);
}else if(maxGuess < 1){
alert('Game over! you have used all your attempts');
for(let i = 0;i<word.length;i++){
    input.querySelectorAll('input')[i].value = word[i];   
}
}
}

resetGame.addEventListener('click',randomText);
typing.addEventListener('input',initGame);
document.addEventListener('keydown',()=>typing.focus());



