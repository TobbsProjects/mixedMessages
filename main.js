

function mixedMessage() {
    const subject = ['A man', 'You', 'I', 'He', 'She', 'A woman', 'The kid', 'Your sister', 'Your mom', 'Your dog', 'A fish', 'A dog', 'An ungreatful bastard', 'The hobo'];
    const verb = ['missed', 'came late to', 'walked', 'smashed', 'played', 'DJ\'d', 'ran', 'ran to', 'hurried to', 'slowmo-walked', 'snailed', 'went'];
    const object = ['the stripclub', 'the library', 'the ally', 'the kitchen', 'the woods', 'your sister', 'your mom', 'your dog', 'a fish', 'your brother', 'your daddy', 'the shit', 'the bathroom', 'the nasty booth'];
    //Assign output with three words
    const wordOne = subject[Math.floor(Math.random()*14)];
    const wordTwo = verb[Math.floor(Math.random()*12)];
    const wordThree = object[Math.floor(Math.random()*14)];
    document.getElementById("message").innerHTML = `${wordOne} ${wordTwo} ${wordThree}`;

}