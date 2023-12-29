let express = require('express');
let app = express();

const bodyParser = require('body-parser');
let express = require('express');
let app = express();

console.log("hello world");

// app.get('/', (req, res) => {
//       res.send('Hello Express');
// });

app.get('/', (req, res) => {
  absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

// app.get('/json', (req, res) => {
//   const messageStyle = process.env.MESSAGE_STYLE || 'uppercase';
//   let message = 'Hello json';
//   if (messageStyle.toLowerCase() === 'uppercase') {
//     message = message.toUpperCase();
//   }
//   res.json({ message });
// });

app.use((req, res, next) => {
  const path = req.path;
  const method = req.method;
  const ip = req.ip;
  console.log(`${method} ${path} - ${ip}`);
  next();
});

app.get('/json', (req, res) => {
  res.json({"message": "Hello json"})
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
    res.json({time: req.time});
  });

app.get('/:word/echo', (req, res) => {
  const echoedWord = req.params.word;
  res.json({ echo: echoedWord });
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.route('/name')
.get((req, res) => {
  const fullName = req.query.first + ' ' + req.query.last;
  res.json({ name: fullName });
})
.post((req, res) => {
  const fullName = req.body.first + ' ' + req.body.last;
  res.json({ name: fullName });
});















































 module.exports = app;





































 module.exports = app;
