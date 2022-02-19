function getData() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status == 200) {
            console.log("Response Generated")
            var res = JSON.parse(this.responseText)
                for(var i =0; i<res.length; i++)
                    console.log(res[i].id, res[i].title)

            }
            else {
                console.log("Call Failed :(")
            }
        }
    }
    http.open('GET','https://jsonplaceholder.typicode.com/todos', true)
    http.send()
}

getData()