#projects related to DOM

##Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-qa8ckf)



##project1

```
JS Solution code for Color Scheme switcher

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(buttons);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); //with e.target, we get to know where this event is coming from
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```



##project2
```
JS Solution for BMI Calculator

const form = document.querySelector('form');

//this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Show the result
    if (bmi > 0 && bmi <= 18.6) {
      results.innerHTML = `<span>underweight${bmi}</span>`;
    } else if (bmi >= 18.7 && bmi <= 24.9) {
      results.innerHTML = `<span>normal${bmi}</span>`;
    } else {
      results.innerHTML = `<span>overweight${bmi}</span>`;
    }
  }
});

```



##project3

```
JS solution for Digital clock

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

##project4

```
JS solution for Guess a Number

let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  //checks the range of value between 1 and 100 and checks for a valid number
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number greater than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100 ');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over, random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //looks for the random number which might be equal to actual input and provide low, high or equal as output
  if (guess === randomNumber) {
    displayMessage(`HURRAY! you guessed it right ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Try Again, Number is Too Low ${randomNumber}`);
  } else {
    displayMessage(`Try Again, Number is Too High ${randomNumber}`);
  }
}

function displayGuess(guess) {
  //clean up the values, guesses and remaining guess will be updated
  userInput.value = ' ';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //low or high is passed in it and their values are printed here
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //to end the current game
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button'); //adding a new button to clear out
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //to start a new game
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    let randomNumber = parseInt(Math.random() * 100 + 1);

    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


```

##project5


```
JS solution for Unlimited colors

//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
  
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  console.log(randomColor());
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeColor, 1000);
      console.log('started');
    }
    function changeColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChangingColor = function () {
    clearTimeout(intervalId);
    console.log('stoped');
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  


```

##project6

```
JS solution for Keyboard

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  `;
});


```