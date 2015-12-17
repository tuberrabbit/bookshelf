var Header = document.querySelector('#Header');
document.body.appendChild(Header.import.querySelector('.header'));
var homeButton = document.querySelector('#home');
homeButton.setAttribute('class', homeButton.getAttribute('class') + ' button--selected-tab');

window.onload = function () {
  var tableHeaderList = ['Name', 'Publisher', 'By', 'ISBN', 'Price($)'];

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
      tableHeaderList.forEach(function (header) {
        var td = document.createElement('td');
        td.textContent = book[header];
        td.setAttribute('class', 'table__row--has-book');
        tr.appendChild(td);
      });

      var td = document.createElement('td');
      td.appendChild(createButton('view', function () {
        console.log('this is view button');
      }));
      td.appendChild(createButton('edit', function () {
        console.log('this is edit button');
      }));
      td.appendChild(createButton('delete', function () {
        console.log('this is delete button');
      }));
      td.setAttribute('class', 'table__row--has-book');

      tr.appendChild(td);
    }
    return tr;
  };

  var createTableHeader = function () {
    var tr = document.createElement('tr');
    tableHeaderList.forEach(function (header) {
      var th = document.createElement('th');
      th.textContent = header;
      th.setAttribute('class', 'table__row--header');
      tr.appendChild(th);
    });

    var th = document.createElement('th');
    th.textContent = 'Operate';
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

  var booksList = document.querySelector('#book-list');
  var books = JSON.parse(localStorage.getItem('books'));
  booksList.appendChild(createTable(books));
};
