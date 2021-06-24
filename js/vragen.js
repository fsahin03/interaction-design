const questions = {
    programeren: [ 
    {
        
        vraag: `Is HTML een programmeertaal?`,
        antwoord_a: `ja`, 
        antwoord_b: `nee`, 
        antwoord: `antwoord_b`
    },
    {
        
        vraag: `Hoe word dit afgesloten: <div>`,
        antwoord_a: `<div.>`, 
        antwoord_b: `<div/>`, 
        antwoord_c: `div.`, 
        antwoord_d: `</div>`,
        antwoord: `antwoord_d`
    },
    {
        
        vraag: `Hoe heet de styling die bij html word gebruikt?`,
        antwoord_a: `Css`, 
        antwoord_b: `HTML.styles`, 
        antwoord_c: `Javascript`, 
        antwoord_d: `Bootstrap`,
        antwoord: `antwoord_a`
    },
    {
        
        vraag: `Welke datatype hoort bij 1?`,
        antwoord_a: `boolean`, 
        antwoord_b: `string`, 
        antwoord_c: `integer (int)`, 
        antwoord_d: `double`,
        antwoord: `antwoord_c`
    },
    {
        
        vraag: `Hoe start je een html bestand?`,
        antwoord_a: `DOCtype HTML`, 
        antwoord_b: `!DOCTYPE HTML`, 
        antwoord_c: `header`, 
        antwoord_d: `doctype HTML`,
        antwoord: `antwoord_b`
    }
    ],
    NL: [ 
    {
        
        vraag: `Wat is een lidwoord?`,
        antwoord_a: `één`, 
        antwoord_b: `het`, 
        antwoord_c: `word`, 
        antwoord_d: `die`, 
        antwoord: 'antwoord_b'
    },
    {
        
        vraag: `Wat is de hoofdpersoon?`,
        antwoord_a: `De minst belangrijke persoon in de tekst`, 
        antwoord_b: `De belangrijkste persoon in de tekst`, 
        antwoord_c: `De oudste persoon in de tekst`, 
        antwoord_d: `Een feitelijke tekst`, 
        antwoord: 'antwoord_b'
    },
    {
        
        vraag: `Wat is een fictieve tekst?`,
        antwoord_a: `Een verzonnen verhaal`, 
        antwoord_b: `Een nieuwsartikel`, 
        antwoord_c: `Een instructie`, 
        antwoord_d: `Een feitelijke tekst`, 
        antwoord: `antwoord_a`
    },
    {
        
        vraag: `Wat is de hoofdgedachte?`,
        antwoord_a: `Eerst zin van een alinea`, 
        antwoord_b: `Een samenvatting van een tekst`, 
        antwoord_c: `De mening van de schrijver`, 
        antwoord_d: `Een zin die de hele tekst samenvat`,
        antwoord: `antwoord_d`
    },
    {
        
        vraag: `Wat is het doel van een activerende tekst?`,
        antwoord_a: `De lezer iets laten doen`, 
        antwoord_b: `De lezer informeren`, 
        antwoord_c: `De lezer amuseren`, 
        antwoord_d: `De lezer overtuigen`,
        antwoord: `antwoord_a`
    }
    ],
    ENG: [ 
    {
        
        vraag: `Wat is een verb?`,
        antwoord_a: `werkwoord`, 
        antwoord_b: `bijvoegelijk naamwoord`, 
        antwoord_c: `persoonsvorm`, 
        antwoord_d: `onderwerp`, 
        antwoord: 'antwoord_a'
    },
    {
        
        vraag: `Wat is de present simple`,
        antwoord_a: `verleden tijd`, 
        antwoord_b: `enkelvoud`, 
        antwoord_c: `tegenwoordige tijd`, 
        antwoord_d: `toekomst`, 
        antwoord: 'antwoord_c'
    },
    {
        
        vraag: `Wat is de verleden tijd van leave?`,
        antwoord_a: `leaved`, 
        antwoord_b: `left`, 
        antwoord_c: `leaves`, 
        antwoord_d: `leavingd`, 
        antwoord: `antwoord_b`
    },
    {
        
        vraag: `Wat is het hele werkwoord van to lie?`,
        antwoord_a: `lies`, 
        antwoord_b: `lie`, 
        antwoord_c: `lieing`, 
        antwoord_d: `lying`,
        antwoord: `antwoord_d`
    },
    {
        
        vraag: `Wat is de beleefde manier om te groeten?`,
        antwoord_a: `Hello how are you`, 
        antwoord_b: `Yo what's poppin`, 
        antwoord_c: `Good day sir`, 
        antwoord_d: `wassup`,
        antwoord: `antwoord_c`
    }
    ],
    REK: [ 
    {
        
        vraag: `5*(3+3*4)=`,
        antwoord_a: `120`, 
        antwoord_b: `75`, 
        antwoord_c: `72`, 
        antwoord_d: `26`, 
        antwoord: 'antwoord_b'
    },
    {
        
        vraag: `12*8-6*8=`,
        antwoord_a: `48`, 
        antwoord_b: `192`, 
        antwoord_c: `720`, 
        antwoord_d: `-480`, 
        antwoord: 'antwoord_a'
    },
    {
        
        vraag: `5*(12–8:4)`,
        antwoord_a: `5`, 
        antwoord_b: `13`, 
        antwoord_c: `50`, 
        antwoord: `antwoord_c`
    },
    {
        
        vraag: `(30:2*5)−(5:2*10)`,
        antwoord_a: `50`, 
        antwoord_b: `-22`, 
        antwoord_c: `74,75`, 
        antwoord_d: `2,75`,
        antwoord: `antwoord_a`
    },
    {
        
        vraag: `18+6*20:(13-7)`,
        antwoord_a: `20,2`, 
        antwoord_b: `114,4`, 
        antwoord_c: `38`, 
        antwoord_d: `34`,
        antwoord: `antwoord_c`
    }
    ]
};
// GEGEVENS DIE HIERBIJ HOREN
let correctAnswer = '';
let currentQuestion = 0;
const answerButtons = document.querySelectorAll('.answer_button');

for (let i = 0; i < answerButtons.length; i++) {
    const theBtn = answerButtons[i];
    theBtn.addEventListener('click', function() {
        if (theBtn.classList.contains(correctAnswer)) {
            alert('Good job');
            currentQuestion++;
            showQuestion(questions.programeren[currentQuestion]);
        }
    });
}
showQuestion(questions.programeren[currentQuestion]);


function showQuestion(question) {
    const questionBlock = document.querySelector('.the-question');
    const buttonA = document.querySelector('.answer-a');
    const buttonB = document.querySelector('.answer-b');
    const buttonC = document.querySelector('.answer-c');
    const buttonD = document.querySelector('.answer-d');

    questionBlock.textContent = question.vraag;
    buttonA.textContent = question.antwoord_a;
    buttonB.textContent = question.antwoord_b;
    buttonC.textContent = question.antwoord_c;
    buttonD.textContent = question.antwoord_d;
    correctAnswer = question.antwoord;
    console.log(question.antwoord);

}

console.log(questions.NL)