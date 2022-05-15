const QuizData =[
    {
        quiz: 'Q1:Which language runs in web brwoser',
        a:'java',
        b:'C',
        c:'python',
        d:'Java Script',

        correct: 'd'
   
    },
    {
        quiz: 'Q2: JS Frameworks tought in Moringa school for mpp25',
        a:'java',
        b:'C',
        c:'React',
        d:'Java Script',

        correct: 'c'
   
    },
    {
        quiz: 'Q3: CSS Stands for',
        a:'Cascading Style Sheet',
        b:'Computer science society',
        c:'scripting language',
        d:'cascading styles script',

        correct: 'a'
   
    },
    {
        quiz: 'Q4:Which one is not HTML Element',
        a:'padding',
        b:'h2',
        c:'p',
        d:'div',

        correct: 'a'
   
    },
    {
        quiz: 'Q4:Which type of element is typically a block?',
        a:'<p>',
        b:'<q>',
        c:'<i>',
        d:'<b>',

        correct: 'a'
   
    }
];
const questionCard = document.getElementById('question-card')

//const anwers1 = document.getElementById('answer"')
const answers = document.querySelectorAll('.answer')
const questionTitle = document.getElementById('quiz')
const _1answer = document.getElementById('_1answer')
//console.log(_1answer.innerText)
const _2answer = document.getElementById('_2answer')
const _3answer = document.getElementById('_3answer')
const _4answer = document.getElementById('_4answer')

const submitBtn = document.getElementById('submit')
//console.log(submitBtn.textContent = 'button1234')
const showScore = document.querySelector('#showScore')

let score = 0
let currentQuiz = 0

loadQuestion()

function loadQuestion(){
   deselectAnswers()

    const currentQuizData = QuizData[currentQuiz]
  // console.log(questionTitle.textContent = currentQuizData.quiz)
   questionTitle.innerText = currentQuizData.quiz

 // console.log(quiz.textContent= QuizData[currentQuiz].a)

  _1answer.innerText = currentQuizData.a
  _2answer.textContent = currentQuizData.b
  _3answer.textContent = currentQuizData.c
  _4answer.textContent = currentQuizData.d
}

function deselectAnswers(){
    answers.forEach(answer=> answer.checked = false);
}

function getSelected(){

    let answer;
    answers.forEach(currentAns=>{
        if(currentAns.checked){
            answer= currentAns.id;
        }  
        
})
return answer
}

// Event listener
submitBtn.addEventListener('click',submitFunction)
console.log()

function submitFunction(){
   // console.log('clicked')
    const checkedAns = getSelected()
    //console.log(checkedAns)
        if(checkedAns ===QuizData[currentQuiz].correct){
            score++
        }
        currentQuiz++;

        if(currentQuiz < QuizData.length){
            loadQuestion()
        }
        else{
            showScore.innerHTML = `
            <h3> You answered ${score} / ${QuizData.length} Questions </h3>
            <img src="images/677-trophy.gif" alt="trophy">
            <button onclick="location.reload()">Play Again</button>
            `
        }
}


