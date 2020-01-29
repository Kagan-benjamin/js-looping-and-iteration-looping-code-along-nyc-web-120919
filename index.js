let finalArray = [];

function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        finalArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return finalArray;
}

function countDown(int) {
    for (let i = 0; i < (int + 1); i++) {
        console.log(int - i);
    }
}
