//change this to change which games you can play, based on ratings
const myAge = 15;

//change this to change whether or not you want to play the games
const motivationLevel = 8

const canAnyAge = 'ABCya and Mario Bros';
const can13Plus = 'Super Smash Bros';
const can18Plus = 'Grand Theft Auto';
let iCanPlay = 'nothing';

if (myAge>=18) {
  iCanPlay = can18Plus+', '+can13Plus+', '+canAnyAge;
} else if (myAge>=13) {
  iCanPlay = can13Plus+', '+canAnyAge;
} else {
  iCanPlay = canAnyAge;
}

console.log(`You can play ${iCanPlay}...`)

motivationLevel>=7 ? console.log('...and you feel like playing them!')
: console.log('...but you want to wait until later to play them.');