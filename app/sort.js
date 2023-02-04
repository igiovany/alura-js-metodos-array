let sortByPriceBtn = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', sortBooksByPrice)

function sortBooksByPrice() {
  let sortBooks = books.sort((a, b) => a.preco - b.preco)
  showBooksOnScreen(sortBooks)
}