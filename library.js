const myLibrary = [];

function Book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${isRead ? "" : "not "}read`;
  }
}

function addBookToLibrary(title, author, numberOfPages, isRead) {
  const newBook = new Book(title, author, numberOfPages, isRead);
  myLibrary.push(newBook);
}