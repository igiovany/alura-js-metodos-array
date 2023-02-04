const insertBooksElement = document.getElementById('livros')

function showBooksOnScreen(booksList) {
  insertBooksElement.innerHTML = ''
  booksList.forEach(book => {
    insertBooksElement.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src="${book.imagem}" ${book.alt}/>
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>`
  });
}