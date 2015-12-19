var Header = document.querySelector('#Header');
document.body.appendChild(Header.import.querySelector('.header'));

var bookButton = document.querySelector('#book');
bookButton.setAttribute('class', bookButton.getAttribute('class') + ' button--selected-tab');

var Form = document.querySelector('#Form');
document.body.appendChild(Form.import.querySelector('.form'));

window.onload = function () {
  var isbn = getQueryParam('isbn');
  if (isbn) {
    httpRequest('GET', '../../config/aBook.json', function (book) {
      console.log('GET', book);
      for (var key in tableHeaderMapper) {
        document.querySelector('input[name="' + key + '"]').value = book[tableHeaderMapper[key]];
      }
      var isbnInput = document.querySelector('input[name="ISBN"]');
      isbnInput.setAttribute('disabled', '');
    });
  }

  var form = document.querySelector('.form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var getBook = function (formElements) {
      var book = {};
      for (var index in formElements) {
        book[tableHeaderMapper[formElements[index].name]] = formElements[index].value;
      }
      return book;
    }
    var book = getBook(e.target.elements.slice(0, e.target.elements.length));
    if (isbn) {
      httpRequest('PUT', baseUrl + '/' + isbn, function (data) {
        console.log('PUT', data);
        location.href = '/';
      }, book);
    } else {
      httpRequest('POST', baseUrl, function (data) {
        console.log('POST', data);
        location.href = '/';
      }, book);
    }
  });
};
