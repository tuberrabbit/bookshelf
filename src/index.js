var Header = document.querySelector('#Header');
document.body.appendChild(Header.import.querySelector('.header'));

window.onload = function () {
  var createRowsWithoutRecord = function () {
    var node = document.createElement('div');
    var value = document.createTextNode('sorry, there is no record yet.')
    node.appendChild(value)
    node.setAttribute('class', 'books-list--no-record');
    return node;
  };
  var booksList = document.querySelector('#books-list');
  booksList.appendChild(createRowsWithoutRecord());
}
