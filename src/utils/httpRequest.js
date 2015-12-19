var httpRequest = function (method, url, cb, data) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState===XMLHttpRequest.DONE && request.status===200){
      cb(JSON.parse(request.responseText));
    }
  };
  request.open(method, url, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(data));
}
