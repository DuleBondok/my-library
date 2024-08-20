const myLibrary = [];
let bookList = document.getElementById("bookList");

function Book(title, author, pages, isRead) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
}

function addBookToLibrary(book)
{
    myLibrary.push(book);
}

let LordRings = new Book("Lord of the rings", "J.R.R. Tolkien", 232, true);
let HarryPotter = new Book("Harry Potter", "J.K. Rowling", 322, false );

addBookToLibrary(LordRings);
addBookToLibrary(HarryPotter);
console.log(myLibrary);


displayLibrary();

function displayLibrary() {
    bookList.innerHTML= "";
myLibrary.forEach ((book) => {
    console.log(book.title);
    let newDiv = document.createElement("div");
    newDiv.classList.add("bookS");
    newDiv.style.backgroundColor = "blue";
    newDiv.style.border = "1px solid black"
    newDiv.style.width = "220px";
    newDiv.style.height = "250px";
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "column";
    newDiv.style.alignItems = "center";
    newDiv.style.margin = "15px";
    newDiv.style.gap = "15px"
    bookList.appendChild(newDiv);

    let bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    bookTitle.style.color = "white";
    newDiv.appendChild(bookTitle);

    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;
    bookAuthor.style.fontFamily = "Ariel";
    newDiv.appendChild(bookAuthor);

    let bookPages = document.createElement("h5")
    bookPages.textContent = book.pages + " pages";
    newDiv.appendChild(bookPages);

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.id="checkbox";
    checkbox.name="checkbox";
    checkbox.style.marginRight = "5px";
    const textContent = document.createTextNode("You read the book");
    label.appendChild(checkbox);
    label.appendChild(textContent);
    newDiv.appendChild(label);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove";
    let index = myLibrary.indexOf(book);

    removeButton.addEventListener("click", () => {
        tryRemove(index);
    });

    newDiv.appendChild(removeButton);
    
});
}

function tryRemove(index)
{
    myLibrary.splice(index, 1);
    displayLibrary();
}


const addNewBook = document.getElementById("addNewBookBtn");
addNewBook.addEventListener("click", () => {
    popUp();
});

function popUp()
{
    let container = document.getElementById("containerForm");
    container.style.display = "flex";
    container.style.flexDirection = "column";


    let submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        let nameValue = document.getElementById("nameInput").value;
        let authorValue = document.getElementById("authorInput").value;
        let pagesValue = document.getElementById("pagesInput").value;
        let checkValue = document.getElementById("checkRead").checked;
        if(!nameValue || !authorValue || !pagesValue)
        {
            alert("All fields are required!");
        }
        else
        {
        const book1 = new Book(nameValue, authorValue, pagesValue, checkValue);
        addBookToLibrary(book1);
        displayLibrary();
        container.style.display = "none";
        nameValue = "";
        authorValue = "";
        pagesValue = 0;
        }
    });
}