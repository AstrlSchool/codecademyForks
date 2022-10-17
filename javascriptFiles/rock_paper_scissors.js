const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  userInput==='rock'||userInput==='paper'||userInput==='scissors'||userInput==='bomb' ? userInput : userInput==='' ? console.log('You chose nothing,') : console.log('error, incorrect input');
  //this little SCOUNDREL wasted minutes of my life
  return userInput;
}
const getComputerChoice = () => {
  let x = Math.floor(Math.random()*3);
  switch (x) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}
const determineWinner = (userChoice, computerChoice) => {
  const lost = 'You lost.';
  const won = 'You won!'
  if (userChoice===computerChoice) {
    return 'It\'s a tie.';
  } else if (userChoice==='rock') {
    if (computerChoice==='paper') { 
      return lost;
    } else {
      return won;
    }
  } else if (userChoice==='paper') {
    if (computerChoice==='scissors') { 
      return lost;
    } else {
      return won;
    }
  } else if (userChoice==='scissors') {
    if (computerChoice==='rock') { 
      return lost;
    } else {
      return won;
    }
  } else {
    return lost;
  }
}
const playGame = choose => {
  const userChoice = getUserChoice(choose);
  const computerChoice = getComputerChoice();
  choose ? console.log('You chose '+userChoice+',') : '' ;
  console.log('and your opponent chose '+computerChoice+'.');
  choose==='bomb' ? console.log('You won! ...but wasn\'t that a bit much?') : console.log(determineWinner(userChoice, computerChoice));
}
// put rock, paper, or scissors into the quotes. (definitely don't put bomb :) ) 
playGame('');