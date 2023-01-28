const elForm = document.querySelector('#add-form');
const ul = document.querySelector('#todos');
const errSpan = document.querySelector('#span');

const themeBtn = document.querySelector('#btn-theme');


function renderTodos(array) {
	ul.textContent = '';

	for (let i = 0; i < array.length; i++) {
		const newLi = document.createElement('li');
		newLi.className = 'list-group-item d-flex justify-content-between';
		newLi.innerHTML = `
		<div>			
						<h3 style='${array[i].completed ? 'text-decoration:line-through' : ''}'>${
			array[i].title
		}</h3>
			<p class="">${array[i].date}  </p>
		</div>
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

	let date = evt.target.date;

	// form validation
	if (input.value === '') {
		span.style.display = 'block';
		input.className += ' border-danger';

		return;
	}
	span.style.display = 'none';
	input.className = 'form-control';

	// add todo to array
	const newTodo = {
		title: input.value,
		completed: false,
		date: date.value,
	};

	todos.push(newTodo);

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

// array
// function
// object
