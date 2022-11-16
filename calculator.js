const express = require("express");
const app = express();
const port = 3000;

//! instead of using body parser used built-in-express near "urlencoded" as body parser is depricated
//*extented is not somethng we use but it is need for us to post
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //* __dirname +"/anyfile" is used to get present location of the javascript and append the file u want like wherever it is running from, be it a desktop or an actual server
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function (req, res) {
  //* by using "req.body" we can access the user input
  //* for mathematical operations the input u get will be a string and it should be converted to number
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send(`Your result is ${result}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
