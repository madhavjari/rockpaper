function getcomputerchoice(){
    rand = Math.random()
    console.log(rand);
    if(rand <= 0.33){
        return 'ROCK';
    }
    else if(rand <=0.66){
        return 'PAPER';
    }
    else{
        return 'SCISSOR';
    }
}

function gethumanchoice(){
    return prompt('Rock/Paper/Scissor').toUpperCase();
}

let compscore = 0;
let humanscore = 0;
let loop = 0;

function playRound(compchoice,humanchoice){
    if(humanchoice == compchoice){
        console.log('Its a tie');
        loop++;
    }
    else if(humanchoice == 'ROCK' && compchoice == 'SCISSOR'){
        humanscore++;
        loop++;
        console.log(`You win, ${humanchoice} beats ${compchoice}`);
    }
    else if(humanchoice == 'ROCK' && compchoice == 'PAPER'){
        compscore++;
        loop++;
        console.log(`You lost, ${compchoice} beats ${humanchoice}`);
    }
    else if(humanchoice == 'PAPER' && compchoice == 'ROCK'){
        humanscore++;
        loop++;
        console.log(`You win, ${humanchoice} beats ${compchoice}`);
    }
    else if(humanchoice == 'PAPER' && compchoice =='SCISSOR'){
        compscore++;
        loop++;
        console.log(`You lost, ${compchoice} beats ${humanchoice}`);
    }
    else if(humanchoice == 'SCISSOR' && compchoice == 'PAPER'){
        humanscore++;
        loop++;
        console.log(`You win, ${humanchoice} beats ${compchoice}`);
    }
    else if(humanchoice == 'SCISSOR' && compchoice == 'ROCK'){
        compscore++;
        loop++;
        console.log(`You lost, ${compchoice} beats ${humanchoice}`);
    }
    else{
        loop++;
        console.log('Something is wrong');
    }
    console.log(`Human: ${humanscore}`);
    console.log(`Computer: ${compscore}`);
    if(loop == 5){
        if(humanscore >= compscore) alert('You win');
        else if(humanscore <= compscore) alert('You lost');
        else alert('Its a tie');
    }
}

function playGame(){
    i = 1;
    while (i<=5){
        const compchoice = getcomputerchoice();
        const humanchoice = gethumanchoice();
        console.log(compchoice);
        console.log(humanchoice);
        playRound(compchoice,humanchoice);
        i++;
    }
}
playGame();