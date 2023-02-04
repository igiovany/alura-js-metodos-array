let books = []

const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getSearchAPIBooks()
const insertBooksElement = document.getElementById('livros')

async function getSearchAPIBooks() {
  const aws = await fetch(endpointAPI)
  books = await aws.json()
  console.table(books)
  showBooksOnScreen(books)
}

function showBooksOnScreen(booksList) {
  booksList.forEach(book => {
    insertBooksElement.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src="${book.imagem}" ${book.alt}/>
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$${book.preco}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>`
  });
}