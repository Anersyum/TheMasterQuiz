const questions = [
    {
        question: "Koliko je Amoru uvijek falilo za sirnice?",
        answer1: "100KM",
        answer2: "Pola marke",
        answer3: "50KM",
        answer4: "5KM",
        correctAnswer: "answer2"
    },
    {
        question: "<img src='./assets/images/Q2.jpg' /><br />Ova famozna rečenica je izgovorena na kojem eventu?",
        answer1: "Svirka u Horsu",
        answer2: "Kod Slađana na slavi",
        answer3: "Nova godina kod Stojana",
        answer4: "Senkin rođendan",
        correctAnswer: "answer3"
    },
    {
        question: "<img src='./assets/images/Q1.jpg' /><br />Šta je pisac htio da kaže?",
        answer1: "Nemam pojma",
        answer2: "Ne znam",
        answer3: "Ništa mi ne pada na pamet",
        answer4: "Vrlo vjerovatno neka filozofija o spašavanju svijeta muzikom koja je digitalizovana na poseban način",
        correctAnswer: "answer4"
    },
    {
        question: "<img src='./assets/images/Q3.jpg' /><br />Orginalna fraza iz koje je proizašla ova karikatura glasi?",
        answer1: "Ti barem imaš balkon",
        answer2: "Sve je to muzika, samo drugi žanr",
        answer3: "Koji kujach",
        answer4: "Ovo je Matrix. Ja sam Neo.",
        correctAnswer: "answer1"
    },
    {
        question: "Fudbalska zvijezda koja je loptu, koja se kretala u zraku, primila kosom je?",
        answer1: "Maradona",
        answer2: "Pele",
        answer3: "Messi",
        answer4: "Stefan \"Šćefo\"",
        correctAnswer: "answer4"
    },
    {
        question: "Sve je to ista muzika, samo drugi ______",
        answer1: "Z",
        answer2: "doktor",
        answer3: "žanr",
        answer4: "metal",
        correctAnswer: "answer3"
    }
];

const questionContainer = document.querySelector(".question-container");
const answerContainers = document.querySelectorAll(".answer");
let questionCounter = 0;

function checkAnswer(answer) {
    
    disableClicks();
    const question = getCurrentQuestion();
    
    setTimeout(() => {
        answer.classList.remove("correct");
        answer.classList.remove("wrong");
        nextQuestion();
    }, 3 * 1000);

    if (question.correctAnswer == answer.dataset.name) {
        answer.classList.add("correct");
        return;
    }

    answer.classList.add("wrong");

}

function nextQuestion() {

    ++questionCounter;
    
    if (questionCounter >= questions.length) {
        finishGame();
        return;
    }

    setQuestion();
}

function setQuestion() {

    const question = getCurrentQuestion();

    questionContainer.innerHTML = question.question;
    
    answerContainers.forEach((answer, index) => {
        answer.innerText = question[`answer${index + 1}`];
    });

    enableClicks();
}

function finishGame() {

    const main = document.getElementsByTagName("main")[0];

    main.innerHTML = "Done! Well played!";

    setTimeout(() => {
        main.innerHTML += "<br />Happy birthday bro!";
    }, 2 * 1000);
}

answerContainers.forEach(answer => {
    answer.addEventListener("click", () => checkAnswer(answer));
});


function getCurrentQuestion() {
    return questions[questionCounter];
}

function disableClicks() {
    answerContainers.forEach(answer => {
        answer.classList.add("disable-click");
    });
}

function enableClicks() {
    answerContainers.forEach(answer => {
        answer.classList.remove("disable-click");
    });
}

setQuestion();