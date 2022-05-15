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