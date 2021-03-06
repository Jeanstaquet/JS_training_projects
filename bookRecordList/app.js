// Book Constructor

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    };
};

// UI Constructor
class UI {
    constructor() {}

    addBookToList(book) {
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X<a></td>`;

        list.appendChild(row);
    };

    cleanFields() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    };

    showAlert(message, className) {
        const div = document.createElement("div");
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);
        setTimeout(function() {
            document.querySelector(".alert").remove();

        }, 3000)
    }

    deleteBook(target) {
        if(target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }

};

//Local storage
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        };

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function(book){
            const ui = new UI;

            ui.addBookToList(book);
        })
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function(book, index){
            if(book.isbn === isbn) {
                books.splice(index, 1);
         }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//DOM
document.addEventListener("DOMContentLoaded", Store.displayBooks);


// Event Listeners
document.querySelector("#book-form").addEventListener("submit",
 function(e) {
     //Grab the value of the boxes from the form
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    
    //Instance of a book
    const book = new Book(title, author, isbn);
    
    
    //Instance UI
    const ui = new UI()

    if (title === "" || author === "" || isbn === ""){
        ui.showAlert('Please fill in all fields', 'error');
    }else{
        ui.addBookToList(book);
        Store.addBook(book);
        ui.showAlert("Book Added!", "success");
        ui.cleanFields();
    }

    e.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function(e) {

    const ui = new UI();

    ui.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    ui.showAlert("Book removed !", "success")

    e.preventDefault();
});