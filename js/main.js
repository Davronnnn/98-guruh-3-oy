const elResult = document.querySelector('#result');
const elInput = document.querySelector('#age');
const elForm = document.querySelector('.form');

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	elResult.textContent = '';

	const value = Number(elInput.value);

	if (value % 3 === 0 && value % 5 === 0) {
		elResult.textContent = 'FizzBuzz';
	} else if (value % 5 === 0) {
		elResult.textContent = 'Buzz';
	} else if (value % 3 === 0) {
		elResult.textContent = 'Fizz';
	} else {
		elResult.textContent = value;
	}
});

// elForm.addEventListener('submit', function (evt) {
//     evt.preventDefault();

// 	const age = elInput.value;
// 	const result = 2023 - age;

// 	if (age >= 18) {
// 		elResult.textContent = `Sizning tug'ilgan yilingiz ${result} siz prava ola olasiz`;
// 		elResult.className = 'active-text';
// 	} else {
// 		elResult.textContent = `Sizning tug'ilgan yilingiz ${result} siz prava ola  olmaysiz `;
// 		elResult.className = 'active-text2';
// 	}
// });
