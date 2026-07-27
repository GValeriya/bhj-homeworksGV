const fonts = document.querySelectorAll('.font-size');
const bookFs = document.getElementById('book');

for (let fontButton of fonts) {
    fontButton.addEventListener('click', toggleActive);
};
function toggleActive(e) {
    e.preventDefault();

    const fontActive = document.querySelector('.font-size_active');
    if(fontActive) {
        fontActive.classList.remove('font-size_active');
    }
    this.classList.add('font-size_active');

    bookFs.classList.remove('book_fs-small', 'book_fs-big');

    const size = this.getAttribute('data-size');
    if (size === 'small') {
        bookFs.classList.add('book_fs-small');
    } else if (size === 'big') {
        bookFs.classList.add('book_fs-big');
    }
}