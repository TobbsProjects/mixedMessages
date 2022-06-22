

function mixedMessage() {
    const verb = ['Yellow', 'Submarine', 'Boat', 'Fisherman'];
    const subject = ['Fish', 'Joker', 'Trilliad', 'Mishmash'];
    const static = ['Potatoes', 'Sallad', 'Tomatoes', 'Glorious'];
    //Assign output with three words
    const wordOne = verb[Math.floor(Math.random()*4)];
    const wordTwo = subject[Math.floor(Math.random()*4)];
    const wordThree = static[Math.floor(Math.random()*4)];

    return `${wordOne} ${wordTwo} ${wordThree}`
}

console.log(mixedMessage());