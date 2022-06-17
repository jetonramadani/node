const http = require("http");

const app = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assigment 1</title></head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  } else if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assigment 1</title></head>");
    res.write("<body><ul><li>User 1</li><li>Yser 2</li></ul></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>404 not found</h1>");
    return res.end();
  }
});

app.listen(3000);
