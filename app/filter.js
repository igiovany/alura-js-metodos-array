// const filterBtnFrontBooks = document.getElementById('btnFiltrarLivrosFront')

// filterBtnFrontBooks.addEventListener('click', filterBooks)

const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
  const btnElement = document.getElementById(this.id)
  const category = btnElement.value
  let filteredBooks = category == 'disponivel' ? filterByAvailability() : filterByCategory(category)
  showBooksOnScreen(filteredBooks)
  if (category == 'disponivel') {
    const totalValue = calculateTotalValueOfAvailableBooks(filteredBooks)
    showTotalValueOfAvailableBooks(totalValue)
  }
}

function filterByCategory(category) {
  return books.filter(book => book.categoria == category)
}

function filterByAvailability() {
  return books.filter(book => book.quantidade > 0)
}

function showTotalValueOfAvailableBooks(totalValue) {
  totalValueOfAvailableBooksElement.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>
  `
}