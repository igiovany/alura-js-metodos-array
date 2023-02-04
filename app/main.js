let books = []

const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getSearchAPIBooks()

async function getSearchAPIBooks() {
  const aws = await fetch(endpointAPI)
  books = await aws.json()
  let discountBooks = applyDiscount(books)
  showBooksOnScreen(discountBooks)
}