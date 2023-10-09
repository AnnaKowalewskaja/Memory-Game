const memoryCards = document.querySelectorAll('.memory__card');

memoryCards.forEach(el => {
    el.addEventListener('click', toggleClass(el, 'flip__card'))
})

function toggleClass(el, className) {
    el.classList.toggle(className);
}