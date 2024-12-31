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
  const libraryTable = document.querySelector(".my-library") || document.createElement('table');
  libraryTable.innerHTML = "";

  if (myLibrary.length < 1) return;

  const bookProperties = Object.keys(myLibrary[0]);

  libraryTable.className = "my-library";
  const libraryTableHeaderRow = document.createElement('tr');
  for (let headerText in bookProperties) {
    const headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    libraryTableHeaderRow.appendChild(headerCell);
  }
  libraryTable.appendChild(libraryTable);

  for (let book in myLibrary) {
    const bookRow = document.createElement('tr');
    for (let key in bookProperties) {
      const contentCell = document.createElement('td');
      contentCell.textContent = book[key];
      bookRow.appendChild(contentCell)
    }
    libraryTable.appendChild(bookRow);
  }

  document.appendChild(libraryTable);
}