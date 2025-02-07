// const optionOne = document.getElementById("one"); 
// console.log(optionOne.classList);
// optionOne.style.backgroundColor = "Red";
// const optionTwo = document.getElementsByClassName("two"); 
// const optionThree = document.getElementsByClassName("three"); 
// const optionFour = document.getElementsByClassName("four"); 
// const optionFive = document.getElementsByClassName("five"); 
// const optionSix = document.getElementsByClassName("six"); 

const options = document.querySelectorAll(".option");
const colorBox = document.getElementById("colorBox");
const resetBtn = document.querySelector(".newGameButton");
const modalContainer = document.querySelector(".modalContainer");
const modalCorrect = document.querySelector(".correct");
const modalWrong = document.querySelector(".wrong");
const endScore = document.querySelector(".endScore");
const span = document.getElementById("scoreCard");

function showModalCorrect(){
    modalCorrect.classList.add('show');
}

function closeModalCorrect(){
    modalCorrect.classList.remove('show');
}

function showModalWrong(){
    modalWrong.classList.add('show');
}

function closeModalWrong(){
    modalWrong.classList.remove('show');
}


let colors = [];
let Score = 0;
let displayedColor;

function randomColor(){
    options.forEach((option) =>{
        colors.push(
            `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        );          
    })
}

function assignColors(){
    colors.forEach((color,index) => {
        options[index].style.background = color;
        options[index].setAttribute('data-color', color);
    })
}

function sampleColor(){
    let pickedSampleColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.background = pickedSampleColor;
    displayedColor = pickedSampleColor;

    return pickedSampleColor;
}

function clearColor(){
    while (colors.length > 0) {
        colors.pop();
    }
}

function checkColor(){
    options.forEach((option) => {
        option.addEventListener('click', (e) => {
            do{
                if (e.target.dataset.color === displayedColor) {
                    showModalCorrect();
                    setTimeout(closeModalCorrect, 1000);
                    Score++;
                    
                    break;                
                } else {
                    endScore.textContent = `Your Score: ${Score}`;

                    showModalWrong();
                    setTimeout(closeModalWrong, 1000);
                    setTimeout(reset, 1000);  
                }
            }while (0);
            
        gameLogic();
        });
            
    });
};




function gameLogic(){
    span.textContent = Score;
    clearColor()
    randomColor();
    assignColors();
    sampleColor();
    checkColor();    
}
    
function reset(){
    window.location.reload();
    gameLogic();
}

resetBtn.addEventListener('click', () =>{
    reset();
});



gameLogic();
