var Header = document.querySelector('#Header');
document.body.appendChild(Header.import.querySelector('.header'));

var newBookButton = document.querySelector('#new-book');
newBookButton.setAttribute('class', newBookButton.getAttribute('class') + ' button--selected-tab');

var Form = document.querySelector('#Form');
document.body.appendChild(Form.import.querySelector('.form'));

window.onload = function () {
  var form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var elements = e.target.elements;
    var newBook = {};
    for (var i = 0; i < 5; ++i) {
      newBook[elements[i].name] = elements[i].value;
    }

    var saveToLocalStorage = function (newBook) {
      var books = JSON.parse(localStorage.getItem('books')) || [];
      books.push(newBook);
      localStorage.setItem('books', JSON.stringify(books));
    };

    saveToLocalStorage(newBook);

    location.href = '/';
  })
  form.querySelector('#submit').textContent = 'Add'

}
