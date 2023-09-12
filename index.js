// Code your solutions in this file

function writeCards(people, event){
    const thankYouLine = [];
    for (const name of people){
        thankYouLine.push(`Thank you, ${name}, for the wonderful ${event} gift!` )    
    };
    return thankYouLine; 
}

function countDown(number){
    while(number >-1){
        console.log(number)
        number--
    }
}