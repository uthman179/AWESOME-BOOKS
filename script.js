const links = document.querySelectorAll(".link a");
const sections = document.querySelectorAll("section");

const books = {
    1: {
        title: "Naruto ",
        author: "Masashi Kishimoto"
    },
    2: {
        title: "One Piece ",
        author: "Eiichiro Oda"
    },
    3: {
        title: "Attack on Titan",
        author: "Hajime Isayama"
    }
}


links.forEach((link) => {
    link.addEventListener('click', () => {
        let linkHash = link.href.split("#")[1];
        
        for (let section of sections) {
            if (section.id === linkHash) {
                section.style.display = "block";
            } else {
                section.style.display = "none"
            }
        }
    })
})
if (!localStorage.getItem("Uploaded books")) {
    localStorage.setItem("Uploaded books", JSON.stringify(books));
}
const bookShelf = document.querySelector(".book-container");

function listBooks() {
    bookShelf.innerHTML = ""
    let uploadedBooks = JSON.parse(localStorage.getItem("Uploaded books"));

    Object.entries(uploadedBooks).forEach((book) => {
        let bookCase = `
        <div class="book">
            <p>${book[1].title} by ${book[1].author}</p>
            <button id="${book[0]}" class="trash">TRASH</button>
        </div>
        `
        bookShelf.innerHTML += bookCase;
    })
    const trashButtons = document.querySelectorAll(".trash");

    trashButtons.forEach((trashButton) => {
        trashButton.addEventListener('click', () => {
            let uploadedBooks = JSON.parse(localStorage.getItem("Uploaded books"));
            delete uploadedBooks[trashButton.id];   
            localStorage.setItem("Uploaded books", JSON.stringify(uploadedBooks));

            listBooks();
        })
    })
}

listBooks()

function getNextId(obj) {
    return Math.max.apply(Math, Object.keys(obj)) + 1
}

const addButton = document.querySelector('[type="submit"]');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    let uploadedBooks = JSON.parse(localStorage.getItem("Uploaded books"));

    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    
    uploadedBooks[getNextId(uploadedBooks)] = {
        title: title,
        author: author
    }

    localStorage.setItem("Uploaded books", JSON.stringify(uploadedBooks));

    listBooks();
    document.querySelector("form").reset();
    }  
)

dateWrapper = document.querySelector(".date");

function dateTimer() {
    date = new Date();
    formattedDate = date.toString().split(" ").slice(0, 5).join(" ");
    dateWrapper.innerHTML = formattedDate;
}

setInterval(dateTimer, 1000)
