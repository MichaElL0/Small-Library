const addBookButton = document.querySelector("#bookAdd");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const form = document.querySelector(".book-form");
const formButton = document.querySelector("#formButton");

addBookButton.addEventListener("click", e => {
    console.log("Add book");
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
});

overlay.addEventListener("click", e => {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
});

formButton.addEventListener("click", e => {
    e.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(formData);

    console.log(data);

    addBookToLibrary(formData.get("title"), formData.get("author"), formData.get("pages"), formData.get("read"));
    displayBooks();
    form.reset();
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
});

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages}, ${this.read} with ID of ${this.id}`);
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("1984", "George Orwell", 384, "read");
addBookToLibrary("Steve Jobs", "Walter Isaacson", 700, "read");
addBookToLibrary("Courage to be disliked", "Kishimi Ichiro", 264, "not read");
addBookToLibrary("Courage to be disliked", "Kishimi Ichiro", 264, "not read");
addBookToLibrary("Courage to be disliked", "Kishimi Ichiro", 264, "not read");


function displayBooks() {
    const booksContainer = document.querySelector(".books-container");

    booksContainer.innerHTML = "";

    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        const title = document.createElement("h4");
        title.textContent = `Title: ${book.title}`;

        const author = document.createElement("h4");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("h4");
        pages.textContent = `Pages: ${book.pages}`;

        const read = document.createElement("h4");
        read.textContent = `Read?: ${book.read}`;

        card.append(title, author, pages, read);

        booksContainer.appendChild(card);
    });
}

displayBooks();
