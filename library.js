const myLibrary = [];

function Book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${isRead ? "not " : ""}read`;
  }
}
