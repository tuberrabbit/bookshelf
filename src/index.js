window.onload = function () {
    var tableElements = [];
    var booksList = document.querySelector('tbody');

    var deleteRow = function (isbn) {
        var rows = booksList.getElementsByTagName('tr');
        for (var i = 0; i < rows.length; ++i) {
            if (rows[i].querySelector('.col-isbn').textContent === isbn) {
                booksList.removeChild(rows[i]);
            }
        }
    };

    var createRow = function (book) {
        var tr = document.createElement('tr');

        if (!book) {
            return tr;
        }

        for (var key in tableHeaderMapper) {
            var td = document.createElement('td');
            td.textContent = book[tableHeaderMapper[key]];
            td.setAttribute('class', 'col-' + tableHeaderMapper[key]);
            tr.appendChild(td);
        }

        var td = document.createElement('td');
        var editBtn = document.createElement('a');
        editBtn.textContent = 'edit';
        editBtn.setAttribute('class', 'button');
        editBtn.setAttribute('href', '/pages/book/index.html?isbn=' + book[tableHeaderMapper.ISBN]);
        td.appendChild(editBtn);

        var deleteBtn = document.createElement('a');
        deleteBtn.textContent = 'delete';
        deleteBtn.setAttribute('class', 'button');
        deleteBtn.addEventListener('click', function () {
            $.ajax({
                url: baseUrl + '/' + book[tableHeaderMapper.ISBN],
                type: 'DELETE',
                success: function () {
                    deleteRow(book[tableHeaderMapper.ISBN]);
                }
            });
        });
        td.appendChild(deleteBtn);

        td.setAttribute('class', 'col-operates');
        tr.appendChild(td);


        return tr;
    };

    $.ajax({
        url: baseUrl,
        dataType: 'json',
        success: function (books) {
            if (!books.length) {
                booksList.appendChild(createRow());
            } else {
                books.forEach(function (book) {
                    var tr = createRow(book);
                    tableElements.push(tr);
                    booksList.appendChild(tr);
                });
            }
        }
    });
};
