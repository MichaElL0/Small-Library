const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function() {
        return (`${this.title} by ${this.author}, ${pages}, ${this.read} with ID of ${this.id}`);
    }
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("1984", "George Orwell", 384, "not read");

console.log(myLibrary[0]);
console.log(myLibrary[0].info())
