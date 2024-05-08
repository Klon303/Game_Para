const game = document.getElementById("game")

function start (game, card) {
    let firstcard = null;
    let seconcard = null; 

// создаем перемешенный массив парных чисел
let massivnumber = [];
for (i = 1; i <= card; i++) {
    massivnumber.push(i, i)
}
for (let i = 0; i < massivnumber.length; i++) {
    let randomElement = Math.floor(Math.random() * massivnumber.length);

    let temp = massivnumber[i]
    massivnumber[i] = massivnumber[randomElement];
    massivnumber[randomElement] = temp;
}  

//Карты
for (const CardNumber of massivnumber) {
    let card = document.createElement("div")
    card.classList = "card";
    card.textContent = CardNumber;
    game.append(card);

//Логика 
    card.addEventListener('click', () => {
        if (card.classList.contains("card__open") || card.classList.contains("winner")) {
            return
        }
        
        if (seconcard !== null && firstcard !== null) {
            firstcard.classList.remove("card__open");
            seconcard.classList.remove("card__open");
            firstcard = null;
            seconcard = null;
        }

        if (firstcard == null) {
            firstcard = card;
        } else  {
            seconcard = card;
        }
     card.classList.add("card__open")
     
     if (seconcard !== null && firstcard !== null) {
        let secondcardnumber = seconcard.textContent;
        let firstdcardnumber = firstcard.textContent;
       
     if (firstdcardnumber == secondcardnumber ) {
            firstcard.classList.add('Winner');
            seconcard.classList.add('Winner');
        }
     }
     
    if (massivnumber.length ===  document.querySelectorAll(".Winner").length) {
       
        setTimeout(() => {
            game.innerHTML =  "";
            alert("Победы не даются даром!");
            let card = Number(prompt("Введите количество пар!"))
            start(game, card);
            
        }, 400);
    }
    })
}
}
let card = Number(prompt("Введите количество пар!"))
start(game, card)

