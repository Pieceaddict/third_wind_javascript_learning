const quizdata = [
    {
    question:'Which of the following option leads to the portability and security of Java?',
    
    a: 'Bytecode is executed by JVM',
    b: 'The applet makes the Java code secure and portable',
    c: 'Use of exception handling',
    d: 'Dynamic binding between objects',
         correct : 'a'
},{
    question:'Which of the following is not a Java features?',
    a: 'Dynamic',
    b: 'Architecture Neutral',
    c: 'Use of pointers',
    d: 'Object-oriented',
           correct : 'c'
},{
    question:'_____ is used to find and fix bugs in the Java programs.',

    a:'JVM',
    b:'JRE',
    c:'JDK',
    d:'JDB',
    correct:'d'
},
{
    question:'What is the return type of the hashCode() method in the Object class?',

    a:'Object',
    b:'int',
    c:'long',
    d:'void',
       correct:'b'
},
{
    question:'Which of the following is a valid long literal?',

    a:'ABH8097',
    b:'L990023',
    c:'904423',
    d:'0xnf029L',
        correct:'d'
}
]

 const questionEl = document.getElementById('question');
const a = document.getElementById('a_text');
const b = document.getElementById('b_text');
const c = document.getElementById('c_text');
const d = document.getElementById('d_text');
const quiz = document.getElementById("quiz");
const ansEl = document.querySelectorAll(".answer");
const submitbtn = document.getElementById('submit')
let currentquiz =0;


loadquiz();

function loadquiz(){
  deselectAnswers();
    const currentquizdata = quizdata[currentquiz];
questionEl.innerText = currentquizdata.question;
a.innerText = currentquizdata.a;
b.innerText = currentquizdata.b;
c.innerText = currentquizdata.c;
d.innerText = currentquizdata.d;

}

let score = 0;
function getselected(){
    let answer = undefined;
    
    ansEl.forEach((ansE) => {
     
        if(ansE.checked){
            answer = ansE.id;
        }
        
    });
    return answer;
}

function deselectAnswers() {
    ansEl.forEach((ansE) => {
        ansE.checked = false;
    });
}


 submitbtn.addEventListener("click", () => {

 const answer = getselected();
console.log(answer);
if(answer){
if(answer === quizdata[currentquiz].correct){
    score++;
}
currentquiz++;
if(currentquiz < quizdata.length){
    loadquiz();
}else {
    quiz.innerHTML = `
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You answered correctly at ${score}/${quizdata.length} questions.</h2>
        
        <button onclick="location.reload()">Reload</button>  
    `;
}
}
}) 
/* submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getselected();

    if (answer) {
        if (answer === quizdata[currentquiz].correct) {
            score++;
        }

        currentquiz++;
        if (currentquiz < quizdata.length) {
            loadquiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizdata.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
}); */