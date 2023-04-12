const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
	modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
});

window.addEventListener('click')
