var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var routes = require('./routes');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('/about', routes.about);

app.get('/contact', routes.contact);

app.get('/projects', routes.projects);

app.get('/projects/:id', routes.projectSingle);

app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);
console.log("running on port 3000...");
