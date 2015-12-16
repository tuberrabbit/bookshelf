var Header = document.querySelector('#Header');
document.body.appendChild(Header.import.querySelector('.header'));
var homeButton = document.querySelector('#home');
homeButton.setAttribute('class', homeButton.getAttribute('class') + ' button--selected-tab');

window.onload = function () {
  var createRowsWithoutRecord = function () {
    var node = document.createElement('div');
    node.textContent = 'sorry, there is no record yet.';
    node.setAttribute('class', 'table--no-record');
    return node;
  };
  var booksList = document.querySelector('#table');
  booksList.appendChild(createRowsWithoutRecord());
}
