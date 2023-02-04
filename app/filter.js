// const filterBtnFrontBooks = document.getElementById('btnFiltrarLivrosFront')

// filterBtnFrontBooks.addEventListener('click', filterBooks)

const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
  const btnElement = document.getElementById(this.id)
  const category = btnElement.value
  let filteredBooks = category == 'disponivel' ? books.filter(book => book.quantidade > 0 ) : books.filter(book => book.categoria == category)
  showBooksOnScreen(filteredBooks)
}