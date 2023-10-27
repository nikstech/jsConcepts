// add submit listener on submit button
console.log('Es6 script');
libraryForm.addEventListener("submit", formSubmit);

// constructor function
class Book {
  constructor(bookName, author, type) {
    (this.bookName = bookName), (this.author = author), (this.type = type);
  }
}
class display {
  add(book) {
    let uiStr = `<tr>
      <th scope="col">${book.bookName}</th>
      <th scope="col">${book.author}</th>
      <th scope="col">${book.type}</th>
      </tr>`;
    tableBody.innerHTML += uiStr;
  }
  clear() {
    libraryForm.reset();
  }
  validate(book) {
    if (book.bookName.length > 2 && book.author.length > 2) {
      return true;
    } else {
      return false;
    }
  }
  show(type, showMsg) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                          <strong>Messge:</strong> ${showMsg}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                        </div>`;
    setTimeout(() => {
      message.innerHTML = "";
    }, 2000);
  }
}

function formSubmit(e) {
  e.preventDefault();
  let bookName = document.querySelector("#bookName");
  let author = document.querySelector("#author");
  let addBook = document.querySelector("addBook");
  let fiction = document.querySelector("#fiction");
  let programming = document.querySelector("#programming");
  let cooking = document.querySelector("#cooking");
  let tableBody = document.querySelector("#tableBody");
  let type;
  bookName = bookName.value;
  author = author.value;

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(bookName, author, type);
  let displayTd = new display();
  if (displayTd.validate(book)) {
    displayTd.add(book);
    displayTd.clear();
    displayTd.show("success", "Succefully Updated");
  } else {
    displayTd.show("danger", "Sorry! Book not added due to error");
  }
}
