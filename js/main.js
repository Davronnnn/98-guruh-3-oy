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

function generateTime(speed) {
	const totalHour = elInput.value / speed;
	const hour = Math.floor(totalHour);

	const totalMinutes = (totalHour - hour) * 60;
	const minutes = Math.floor(totalMinutes);

	const seconds = Math.floor((totalMinutes - minutes) * 60);

	return `${hour} soat, ${minutes} daqiqa, ${seconds} soniyada yetib keladi`;
}

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	const space = Number(elInput.value);

	if (isNaN(space)) {
		alert("to'g'ri qiymat kiriting");
	} else {
		const personResultTime = generateTime(personSpeed);
		const bicycleResultTime = generateTime(bicycleSpeed);
		const carResultTime = generateTime(carSpeed);
		const planeResultTime = generateTime(planeSpeed);

		personResult.textContent = personResultTime;
		bicycleResult.textContent = bicycleResultTime;
		carResult.textContent = carResultTime;
		planeResult.textContent = planeResultTime;
	}
});
