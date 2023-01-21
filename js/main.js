const elForm = document.querySelector('.form');
const elInput = document.querySelector('#space');
const personResult = document.querySelector('.person-result');
const bicycleResult = document.querySelector('.bicycle-result');
const carResult = document.querySelector('.car-result');
const planeResult = document.querySelector('.plane-result');

const message = document.querySelector('.message');

const personSpeed = 3.6;
const bicycleSpeed = 20.1;
const carSpeed = 70;
const planeSpeed = 800;

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	// const space = elInput.value;

	// if (input.length <= 6) {
	// 	message.textContent = "parol 6 ta simvoldan ko'p bo'lishi kerak";
	// 	message.className += ' text-danger';
	// } else {
	// 	message.textContent = "tabriklayman ro'yhatdan o'tdingiz";
	// 	message.className += ' text-success';
	// }

	const space = Number(elInput.value);

	if (isNaN(space)) {
		alert("to'g'ri qiymat kiriting");
	} else {
		const personTotalHour = space / personSpeed;
		const personHour = Math.floor(personTotalHour);

		const personTotalMinutes = (personTotalHour - personHour) * 60;
		const personMinutes = Math.floor(personTotalMinutes);

		const personSeconds = Math.floor(
			(personTotalMinutes - personMinutes) * 60
		);

		const bicycleTotalHour = space / bicycleSpeed;
		const bicycleHour = Math.floor(bicycleTotalHour);

		const bicycleTotalMinutes = (bicycleTotalHour - bicycleHour) * 60;
		const bicycleMinutes = Math.floor(bicycleTotalMinutes);

		const bicycleSeconds = Math.floor(
			(bicycleTotalMinutes - bicycleMinutes) * 60
		);

		const carTotalHour = space / carSpeed;
		const carHour = Math.floor(carTotalHour);

		const carTotalMinutes = (carTotalHour - carHour) * 60;
		const carMinutes = Math.floor(carTotalMinutes);

		const carSeconds = Math.floor((carTotalMinutes - carMinutes) * 60);

		const planeTotalHour = space / planeSpeed;
		const planeHour = Math.floor(planeTotalHour);

		const planeTotalMinutes = (planeTotalHour - planeHour) * 60;
		const planeMinutes = Math.floor(planeTotalMinutes);

		const planeSeconds = Math.floor(
			(planeTotalMinutes - planeMinutes) * 60
		);

		personResult.textContent = `${personHour} soat, ${personMinutes} daqiqa, ${personSeconds} soniyada yetib keladi`;
		bicycleResult.textContent = `${bicycleHour} soat, ${bicycleMinutes} daqiqa, ${bicycleSeconds} soniyada yetib keladi`;
		carResult.textContent = `${carHour} soat, ${carMinutes} daqiqa, ${carSeconds} soniyada yetib keladi`;
		planeResult.textContent = `${planeHour} soat, ${planeMinutes} daqiqa, ${planeSeconds} soniyada yetib keladi`;
	}
});


// const elInput = document.querySelector('input');
// const circle1 = document.querySelector('.cl-1');
// const circle2 = document.querySelector('.cl-2');

// elInput.addEventListener('change', function () {
// 	const value = elInput.value;

// 	if (value < 10) {
// 		circle1.style.border = '1px solid red';
// 		circle2.style.border = null;
// 	} else {
//         circle2.style.border = '1px solid blue';
//         circle1.style.border = null;
// 	}
// });
