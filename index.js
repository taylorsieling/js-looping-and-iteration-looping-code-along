function writeCards(friends, gift) {
    let cards = [];
    for (let i = 0; i < friends.length; i++) {
        cards.push(`Thank you, ${friends[i]}, for the wonderful ${gift} gift!`);
    }
    return cards;
}

// writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise');

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}