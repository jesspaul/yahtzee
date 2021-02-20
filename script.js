//Save all image src paths as variables
let diceImagePath = 'https://cdn1.iconfinder.com/data/icons/inked/100/Dice-512.png';
let dice1ImagePath = 'https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-512.png';
let dice2ImagePath = 'https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_2-512.png';
let dice3ImagePath = 'https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_3-512.png';
let dice4ImagePath = 'https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png';
let dice5ImagePath = 'https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_5-512.png';
let dice6ImagePath = 'https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_6-512.png';
let lockImagePath = 'https://simpleicon.com/wp-content/uploads/lock-2.png';
let unlockImagePath = 'https://icons.iconarchive.com/icons/icons8/windows-8/512/Very-Basic-Unlock-icon.png';

//Save all necessary elements as variables
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const dice4 = document.getElementById('dice4');
const dice5 = document.getElementById('dice5');
const lock1 = document.getElementById('lock1');
const lock2 = document.getElementById('lock2');
const lock3 = document.getElementById('lock3');
const lock4 = document.getElementById('lock4');
const lock5 = document.getElementById('lock5');
const rollButton = document.getElementById('roll-button');
const resetButton = document.getElementById('reset-button');
const rollCount = document.getElementById('roll-counter');

//Function to determine random roll for each dice. Selects five random numbers. Checks if the dice has been locked, if not then it assigns the correlating dice image path for the random number to each dice.
const rollDice = () => {
  let randomNum1 = Math.floor(Math.random()*6);
  let randomNum2 = Math.floor(Math.random()*6);
  let randomNum3 = Math.floor(Math.random()*6);
  let randomNum4 = Math.floor(Math.random()*6);
  let randomNum5 = Math.floor(Math.random()*6);
  
  if (lock1.src === unlockImagePath) {
    if (randomNum1 === 0) {
      dice1.src = dice1ImagePath;
    } else if (randomNum1 === 1) {
      dice1.src = dice2ImagePath;
    } else if (randomNum1 === 2) {
      dice1.src = dice3ImagePath;
    } else if (randomNum1 === 3) {
      dice1.src = dice4ImagePath;
    } else if (randomNum1 === 4) {
      dice1.src = dice5ImagePath;
    } else if (randomNum1 === 5) {
      dice1.src = dice6ImagePath;
    };
  };
  
  if (lock2.src === unlockImagePath) {
    if (randomNum2 === 0) {
      dice2.src = dice1ImagePath;
    } else if (randomNum2 === 1) {
      dice2.src = dice2ImagePath;
    } else if (randomNum2 === 2) {
      dice2.src = dice3ImagePath;
    } else if (randomNum2 === 3) {
      dice2.src = dice4ImagePath;
    } else if (randomNum2 === 4) {
      dice2.src = dice5ImagePath;
    } else if (randomNum2 === 5) {
      dice2.src = dice6ImagePath;
    };
  };
  
  if (lock3.src === unlockImagePath) {
    if (randomNum3 === 0) {
      dice3.src = dice1ImagePath;
    } else if (randomNum3 === 1) {
      dice3.src = dice2ImagePath;
    } else if (randomNum3 === 2) {
      dice3.src = dice3ImagePath;
    } else if (randomNum3 === 3) {
      dice3.src = dice4ImagePath;
    } else if (randomNum3 === 4) {
      dice3.src = dice5ImagePath;
    } else if (randomNum3 === 5) {
      dice3.src = dice6ImagePath;
    };
  };
  
  if (lock4.src === unlockImagePath) {
    if (randomNum4 === 0) {
      dice4.src = dice1ImagePath;
    } else if (randomNum4 === 1) {
      dice4.src = dice2ImagePath;
    } else if (randomNum4 === 2) {
      dice4.src = dice3ImagePath;
    } else if (randomNum4 === 3) {
      dice4.src = dice4ImagePath;
    } else if (randomNum4 === 4) {
      dice4.src = dice5ImagePath;
    } else if (randomNum4 === 5) {
      dice4.src = dice6ImagePath;
    };
  };  
  
  if (lock5.src === unlockImagePath) {
    if (randomNum5 === 0) {
      dice5.src = dice1ImagePath;
    } else if (randomNum5 === 1) {
      dice5.src = dice2ImagePath;
    } else if (randomNum5 === 2) {
      dice5.src = dice3ImagePath;
    } else if (randomNum5 === 3) {
      dice5.src = dice4ImagePath;
    } else if (randomNum5 === 4) {
      dice5.src = dice5ImagePath;
    } else if (randomNum5 === 5) {
      dice5.src = dice6ImagePath;
    };
  };  
};

//Setting up to make the locks clickable. Will be executed when roll button is clicked. 
let counter = 0;
let diceArray = [dice1, dice2, dice3, dice4, dice5];
let lockArray = [lock1, lock2, lock3, lock4, lock5];
let lockClick = function(lock) {
  if (lock.target.src === unlockImagePath) {
    lock.target.src = lockImagePath;
  } else if (lock.target.src === lockImagePath) {
    lock.target.src = unlockImagePath;
  };
};

let lockEvents = function(input) {
  input.addEventListener('click', lockClick);
};
let removeLockEvents = function(input) {
  input.removeEventListener('click', lockClick);
};

//save score section as variables
const oneScore = document.getElementById('one-score');
const twoScore = document.getElementById('two-score');
const threeScore = document.getElementById('three-score');
const fourScore = document.getElementById('four-score');
const fiveScore = document.getElementById('five-score');
const sixScore = document.getElementById('six-score');
const upperScore = document.getElementById('upper-score');
const upperBonus = document.getElementById('upper-bonus-score');
const totalUpper = document.getElementById('total-upper-score');
const threeKind = document.getElementById('3kind-score');
const fourKind = document.getElementById('4kind-score');
const fullScore = document.getElementById('full-score');
const smStraight = document.getElementById('smstraight-score');
const lgStraight = document.getElementById('lgstraight-score');
const yahtzeeScore = document.getElementById('yahtzee-score');
const chanceScore = document.getElementById('chance-score');
const yahtzeeBonus = document.getElementById('yahtbonus-score');
const lowerScore = document.getElementById('total-lower-score');
const gameScore = document.getElementById('total-game-score');

//save score locks as variables
const oneScoreLock = document.getElementById('one-lock');
const twoScoreLock = document.getElementById('two-lock');
const threeScoreLock = document.getElementById('three-lock');
const fourScoreLock = document.getElementById('four-lock');
const fiveScoreLock = document.getElementById('five-lock');
const sixScoreLock = document.getElementById('six-lock');
const threeKindLock = document.getElementById('3kind-lock');
const fourKindLock = document.getElementById('4kind-lock');
const fullScoreLock = document.getElementById('full-lock');
const smStraightLock = document.getElementById('smstr-lock');
const lgStraightLock = document.getElementById('lgstr-lock');
const yahtzeeScoreLock = document.getElementById('yahtzee-lock');
const chanceScoreLock = document.getElementById('chance-lock');
const yahtzeeBonusLock = document.getElementById('yahtbonus-lock');

let scoreLockArray = [oneScoreLock, twoScoreLock, threeScoreLock, fourScoreLock, fiveScoreLock, sixScoreLock, threeKindLock, fourKindLock, fullScoreLock, smStraightLock, lgStraightLock, yahtzeeScoreLock, chanceScoreLock, yahtzeeBonusLock]

const checkUpperScore = () => {
  let ones = 0;
  let twos = 0;
  let threes = 0;
  let fours = 0;
  let fives = 0;
  let sixes = 0;
  diceArray.forEach(function(die) {
    if (die.src === dice1ImagePath) {
      ones += 1;
    } else if (die.src === dice2ImagePath) {
      twos += 2;
    } else if (die.src === dice3ImagePath) {
      threes += 3;
    } else if (die.src === dice4ImagePath) {
      fours += 4;
    } else if (die.src === dice5ImagePath) {
      fives += 5;
    } else if (die.src === dice6ImagePath) {
      sixes += 6;
    }
  })
  oneScore.innerHTML = ones;
  twoScore.innerHTML = twos;
  threeScore.innerHTML = threes;
  fourScore.innerHTML = fours;
  fiveScore.innerHTML = fives;
  sixScore.innerHTML = sixes;
}

const resetScore = () => {
  oneScore.innerHTML = '';
  twoScore.innerHTML = '';
  threeScore.innerHTML = '';
  fourScore.innerHTML = '';
  fiveScore.innerHTML = '';
  sixScore.innerHTML = '';
}

//Function to click the roll button. Applies rollDice function, increases counter to track which roll you are on, and make locks clickable only on the first and second rolls.
rollButton.onclick = () => {
  rollDice();
  counter++;
  rollCount.innerHTML = counter;
  if (counter === 1 || counter === 2) {
    lockArray.forEach(lockEvents);
  };
  if (counter === 3) {
    rollButton.style.display = 'none';
    lockArray.forEach(removeLockEvents);
    scoreLockArray.forEach(lockEvents);
    checkUpperScore();
  };
};

//Resets the game and puts everything back to default.
resetButton.onclick = () => {
  dice1.src = diceImagePath;
  dice2.src = diceImagePath;
  dice3.src = diceImagePath;
  dice4.src = diceImagePath;
  dice5.src = diceImagePath;
  lock1.src = unlockImagePath;
  lock2.src = unlockImagePath;
  lock3.src = unlockImagePath;
  lock4.src = unlockImagePath;
  lock5.src = unlockImagePath;
  rollCount.innerHTML = '';
  counter = 0;
  rollButton.style.display = 'inline-block';
};