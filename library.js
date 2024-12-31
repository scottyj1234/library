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

function showLibraryInfo() {
  const libraryTable = document.querySelector(".my-library")
  const bookRows = libraryTable.querySelectorAll("tr.book-row");
  for (let row of bookRows) {
    row.remove();
  }

  bookProperties = ["title", "author", "numberOfPages", "isRead"];

  if (myLibrary.length < 1) return;

  for (let book of myLibrary) {
    const bookRow = document.createElement('tr');
    for (let prop of bookProperties) {
      const contentCell = document.createElement('td');
      contentCell.textContent = book[prop];
      bookRow.appendChild(contentCell)
    }
    libraryTable.appendChild(bookRow);
  }

}

addBookToLibrary("The Hobbit", "Tolkien", 356, false);
addBookToLibrary("Mistborn", "Brandon Sanderson", 578, true);
addBookToLibrary("Three Body Problem", "Cixin Liu", 475, true);