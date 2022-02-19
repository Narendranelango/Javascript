function getData() {
    var http = new XMLHttpRequest();
    http.open('GET','https://jsonplaceholder.typicode.com/todos', true)
    http.send()
}

getData()