var Header = document.querySelector('#Header');
document.body.appendChild(Header.import.querySelector('.header'));

var bookButton = document.querySelector('#book');
bookButton.setAttribute('class', bookButton.getAttribute('class') + ' button--selected-tab');

var Form = document.querySelector('#Form');
document.body.appendChild(Form.import.querySelector('.form'));

window.onload = function () {
  var isbn = getQueryParam('isbn');
  if (isbn) {
    httpRequest('GET', 'data.json', function (book) {
      console.log('GET', book);
      for (var key in tableHeaderMapper) {
        document.querySelector('input[name="' + key + '"]').value = book[tableHeaderMapper[key]];
      }
      var isbnInput = document.querySelector('input[name="ISBN"]');
      isbnInput.setAttribute('disabled', '');
    });
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var elements = e.target.elements;
    var book = {};
    for (var i = 0; i < elements.length - 1; ++i) {
      book[tableHeaderMapper[elements[i].name]] = elements[i].value;
    }

    if (isbn) {
      httpRequest('PUT', '/books/' + isbn, function (data) {
        console.log('PUT', data);
        location.href = '/';
      }, book);
    } else {
      httpRequest('POST', '/books', function (data) {
        console.log('POST', data);
        location.href = '/';
      }, book);
    }
  });

};
