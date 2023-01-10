let boxColor = document.getElementById('main-color');



let redBtn = document.getElementsByClassName('btn-red')[0];
console.log(redBtn)
redBtn.addEventListener('click', function(){
    boxColor.style.backgroundColor = 'red';
    boxColor.style.color = 'white'
})

let blueBtn = document.getElementsByClassName('btn-blue')[0];
console.log(blueBtn)
blueBtn.addEventListener('click', function(){
    boxColor.style.backgroundColor = 'blue';
    boxColor.style.color = 'white'
})

let greenBtn = document.getElementsByClassName('btn-green')[0];
console.log(greenBtn)
greenBtn.addEventListener('click', function(){
    boxColor.style.backgroundColor = 'green';
    boxColor.style.color = 'white'
})

let yellowBtn = document.getElementsByClassName('btn-yellow')[0];
console.log(yellowBtn)
yellowBtn.addEventListener('click', function(){
    boxColor.style.backgroundColor = 'yellow';
    boxColor.style.color = 'black'
})

let purpleBtn = document.getElementsByClassName('btn-purple')[0];
console.log(purpleBtn)
purpleBtn.addEventListener('click', function(){
    boxColor.style.backgroundColor = 'purple';
    boxColor.style.color = 'white'
})

let blackBtn = document.getElementsByClassName('btn-black')[0];
console.log(blackBtn)
blackBtn.addEventListener('click', function(){
    boxColor.style.backgroundColor = 'black';
    boxColor.style.color = 'white'
})

let orangeBtn = document.getElementsByClassName('btn-orange')[0];
console.log(orangeBtn)
orangeBtn.addEventListener('click', function(){
    boxColor.style.backgroundColor = 'orange';
    boxColor.style.color = 'black'
})

let greyBtn = document.getElementsByClassName('btn-grey')[0];
console.log(greyBtn)
greyBtn.addEventListener('click', function(){
    boxColor.style.backgroundColor = 'grey';
    boxColor.style.color = 'white'
})

let turqoiseBtn = document.getElementsByClassName('btn-turqoise')[0];
console.log(turqoiseBtn)
turqoiseBtn.addEventListener('click', function(){
    boxColor.style.backgroundColor = 'turquoise';
    boxColor.style.color = 'black'
})

function resetAll(){
    boxColor.style.backgroundColor = null
    boxColor.style.color = null
}

let resetBtn = document.getElementsByClassName('reset-btn')[0];
console.log(resetBtn)
resetBtn.addEventListener('click', resetAll)