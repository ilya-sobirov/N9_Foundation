const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        let buffer = fs.readFileSync("index.html")
        return res.end(buffer)
    }
    else if(req.url == "/photo" && req.method == "GET"){
        let buffer = fs.readFileSync("photo.jpg")
        return res.end(buffer)
    }
    else if(req.url == "/book" && req.method == "GET"){
        let buffer = fs.readFileSync("book.pdf")
        return res.end(buffer)
    }
    else if(req.url == "/users" && req.method == "GET"){
        return res.end("users")
    }
    res.end("Error")
})




server.listen(8000, () => console.log("server is running 8000"))