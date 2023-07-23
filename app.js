const express = require("express");
const bodyParser = require("body-parser");
const feedRoute = require("./router/feed");

const app = express();

// parses every request body as JSON
app.use(bodyParser.json());

//sets cors access
app.use((req, res, next) => {
  // allows the response to be consumed by any client, we can also use domain and for multiple we can use comma separated
  res.setHeader("Access-Control-Allow-Origin", "*");
  // specifies allowed methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  // specifies allowed header
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoute);

app.listen(8080);
