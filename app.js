var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
var bodyParser = require('body-parser');

const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');
const bicicletaRouter = require('./routes/Bicicleta/bicicletaRouter');
const pecasRouter = require('./routes/Peca/pecasRouter');
const acessoriosRouter = require('./routes/Acessorio/acessoriosRouter');
const carrinhoRouter = require('./routes/Carrinho/carrinhoRouter');
// const cadastroRouter = require('./routes/Usuario/cadastroRouter');
// const loginRouter = require('./routes/Usuario/loginRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({secret: 'sessionSegura', resave: false, cookie: {maxAge: 1000 * 60 * 60 * 24}, saveUninitialized: true}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/bicicletas', bicicletaRouter);
app.use('/pecas', pecasRouter);
app.use('/acessorios', acessoriosRouter);
app.use('/carrinho', carrinhoRouter);
// app.use('/usuario', cadastroRouter);
// app.use('/usuario', loginRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
