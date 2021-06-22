let vraagje = document.getElementById('vraag');
let buttonA1 = document.getElementById('buttonA');
let buttonB2 = document.getElementById('buttonB');
let buttonC3 = document.getElementById('buttonC');
let buttonD4 = document.getElementById('buttonD');
let juisteAntwoord = "B";
let vraag = 1;


vraagje.innerHTML= " 1. Wat is een lidwoord?";
buttonA1.innerHTML = "A.één";
buttonB2.innerHTML = "B.het";
buttonC3.innerHTML = "C.word";
buttonD4.innerHTML = "D.die";




function checkAnswer (gekozenAntwoord)
 {
    alert(gekozenAntwoord);
    if(juisteAntwoord == gekozenAntwoord)
     {
    // alert("Dit is het juiste antwoord");
    vraag++;
    }
    else{
        vraag++;
        // alert("Dit is niet het juiste antwoord");
    };
        // alert("Helaas dat is niet het goede antwoord")
        // vraagje.innerHTML = "2.Wat is de hoofdpersoon?"
        // buttonA1.innerHTML = "A. De minst belangrijke persoon in de tekst";
        // buttonB2.innerHTML = "B. De belangrijkste persoon in een tekst";
        // buttonC3.innerHTML = "C. De oudste persoon in een tekst";
        // buttonD4.innerHTML = "";
}

buttonA1.addEventListener('click',() => {
    checkAnswer("A");
});
buttonB2.addEventListener('click',() => {
    checkAnswer("B");
});
buttonC3.addEventListener('click',() => {
    checkAnswer("C");
});
buttonD4.addEventListener('click',() => {
    checkAnswer("D");
});
