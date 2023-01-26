const elForm = document.querySelector('#add-form');
const ul = document.querySelector('#todos');
const errSpan = document.querySelector('#span');

const themeBtn = document.querySelector('#btn-theme');
const todos = ["Kitob o'qish", "Futbol ko'rish", 'Bozorga borish'];
const names = ['awdas', 'ASdasd', 'Asdasd'];

function renderTodos(array) {
	ul.textContent = '';
	for (let i = 0; i < array.length; i++) {
		const newLi = document.createElement('li');
		newLi.className = 'list-group-item d-flex justify-content-between';
		newLi.innerHTML = `
						<h3>${array[i]}</h3>
						<div>
							<button class="btn btn-info text-white">
								Completed
							</button>
							<button class="btn btn-danger">Delete</button>
						</div>
	`;

		ul.appendChild(newLi);
	}
}

renderTodos(todos);

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	let input = evt.target.todo;

	// form validation
	if (input.value === '') {
		span.style.display = 'block';
		input.className += ' border-danger';

		return;
	}
	span.style.display = 'none';
	input.className = 'form-control';

	// add todo to array

	todos.push(input.value);

	renderTodos(todos);
	elForm.reset();
});





let theme = 'light';

themeBtn.addEventListener('click', function () {
	if (theme === 'dark') {
		document.body.className = 'light'; // oq rang
		theme = 'light'; //oq

		themeBtn.textContent = 'Tungi rejim';
	} else if (theme === 'light') {
		document.body.className = 'dark'; // qora rang
		theme = 'dark'; // qora
		themeBtn.textContent = 'Kunduzgi rejim';
	}
});
