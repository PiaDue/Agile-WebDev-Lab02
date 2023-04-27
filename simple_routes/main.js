const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contacs": "<h1>Contact Us</h1>",
    "/about": "<h1>About Us</h1>",
    "/error": "<h1>Error</h1>",
}

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {
        console.log("Received an incoming request!");
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
        //check weather a route is defined in the map
        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]); //take response out of the map
        } else {
            res.end("<h1>Welcome!</h1>"); //respond with default response
        }
    });
app.listen(port);
console.log(`The server has started and is listening on port number:  ̄ ${port}`);