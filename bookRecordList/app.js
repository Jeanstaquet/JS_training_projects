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

};


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

    //Add book to list
    ui.addBookToList(book);

    ui.cleanFields();

    e.preventDefault();
});