// Code your solutions in this file


function writeCards(arrayOfNames, eventNames) {
    let cards = []
    for (let i = 0; i < arrayOfNames.length; i++) {
        cards.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventNames} gift!`);
    }
    return cards;
}

function countDown(number) {
    let count = number;
    while (count >= 0) {
        console.log(count--);
    }

}