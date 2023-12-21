let bname = document.getElementById("BName");
let ws = document.getElementById("S-url");
var fixedBox = document.getElementById("fixed-box");
var closeBtn = document.getElementById("closeBtn");

let bookList = [];

function createBooks() {
  if (validationName() === true && validationUrl() === true) {
    let books = {
      bookName: bname.value,
      website: ws.value,
    };
    bookList.push(books);
    clearForm();
    display();
  } else {
    fixedBox.classList.replace("d-none", "d-flex");
  }
}

function clearForm() {
  bname.value = "";
  ws.value = "";
}

function display() {
  let trs = ``;
  for (let i = 0; i < bookList.length; i++) {
    trs += `
    <tr>
    <td>${i + 1}</td>
    <td>${bookList[i].bookName}</td>
    <td><a href="
    ${
      bookList[i].website
    }" target="blank" class="btn btn-outline-primary"><i class="fa-solid fa-eye"></i></a></td>
    <td><a class="btn btn-outline-danger" onclick="deleteForm(${i})"><i class="fa fa-trash"></i></a></td>
    </tr>
    `;
  }
  document.getElementById("tableBody").innerHTML = trs;
}

function deleteForm(index) {
  bookList.splice(index, 1);
  display();
}

function validationName() {
  let nameRegex = /^[a-z]{3,15}/;
  let nameValue = bname.value;
  if (nameRegex.test(nameValue) === true) {
    return true;
  } else {
    return false;
  }
}

function validationUrl() {
  let urlRegex = /(https?:\/\/)?(www.)?\w+.\w+/gi;
  let urlValue = ws.value;
  if (urlRegex.test(urlValue) === true) {
    return true;
  } else {
    return false;
  }
}

function closeBox() {
  fixedBox.classList.replace("d-flex", "d-none");
}

closeBtn.addEventListener("click", function () {
  closeBox();
});
