var Header = document.querySelector('#Header');
document.body.appendChild(Header.import.querySelector('.header'));

var homeButton = document.querySelector('#home');
homeButton.setAttribute('class', homeButton.getAttribute('class') + ' button--selected-tab');

window.onload = function () {
  var createRow = function (book) {
    var createButton = function (text, cb) {
      var button = document.createElement('button');
      button.textContent = text;
      button.addEventListener('click', cb);
      return button;
    };

    var tr = document.createElement('tr');
    if (!book) {
      tr.textContent = 'sorry, there is no record yet.';
      tr.setAttribute('class', 'table__row--no-book');
    } else {
      for (var key in tableHeaderMapper) {
        var td = document.createElement('td');
        td.textContent = book[tableHeaderMapper[key]];
        td.setAttribute('class', 'table__row--has-book');
        tr.appendChild(td);
      }

      var td = document.createElement('td');
      td.appendChild(createButton('edit', function () {
        location.href = '/pages/book?isbn=' + book[tableHeaderMapper.ISBN];
      }));
      td.appendChild(createButton('delete', function () {
        httpRequest('DELETE', baseUrl + '/' + book[tableHeaderMapper.ISBN])
      }));
      td.setAttribute('class', 'table__row--has-book');

      tr.appendChild(td);
    }
    return tr;
  };

  var createTableHeader = function () {
    var tr = document.createElement('tr');
    for (var key in tableHeaderMapper) {
      var th = document.createElement('th');
      th.textContent = key;
      th.setAttribute('class', 'table__row--header');
      tr.appendChild(th);
    }

    var th = document.createElement('th');
    th.textContent = 'Operates';
    th.setAttribute('class', 'table__row--header');
    tr.appendChild(th);
    return tr;
  };

  var createTable = function (books) {
    var table = document.createElement('table');
    table.setAttribute('class', 'table');
    if (!books) {
      table.appendChild(createRow());
    } else {
      table.appendChild(createTableHeader());
      books.forEach(function (book) {
        table.appendChild(createRow(book));
      })
    }
    return table;
  };

  httpRequest('GET', './config/books.json', function (books) {
    console.log('GET', books);
    var booksList = document.querySelector('#book-list');
    booksList.appendChild(createTable(books));
  });
};
