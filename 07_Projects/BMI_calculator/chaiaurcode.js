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
    // results.innerHTML = `<span>${bmi}</span>`;

    if (bmi > 0 && bmi <= 18.6) {
      results.innerHTML = `<span>underweight${bmi}</span>`;
    } else if (bmi >= 18.7 && bmi <= 24.9) {
      results.innerHTML = `<span>normal${bmi}</span>`;
    } else {
      results.innerHTML = `<span>overweight${bmi}</span>`;
    }
  }
});
