var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookie = require('cookie-session');
var logger = require('morgan');
var fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registroa=require('./routes/regasp');
var registroe=require('./routes/regemp');
var logina=require('./routes/loginasp');
var loginemp=require('./routes/loginemp');
var perfilasp=require('./routes/perfilasp');
var portafolio=require('./routes/portafolio');
var fotoasp=require('./routes/fotoasp');
var cerrarsesion=require('./routes/cerrarsesion');
var esp=require('./routes/especialidad');
var vid=require('./routes/video');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use(cookie ({
  secret: 'TaRoDaSeDo',
  name: 'cookie'
}));

app.use('/', indexRouter);
app.use('/index',indexRouter);
app.use('/regasp',registroa);
app.use('/regemp',registroe);
app.use('/loginasp',logina);
app.use('/loginemp',loginemp);
app.use('/perfilasp',perfilasp);
app.use('/portafolio',portafolio);
app.use('/fotoasp',fotoasp);
app.use('/users', usersRouter);
app.use('/cerrarsesion',cerrarsesion);
app.use('/especialidad',esp);
app.use('/video',vid);

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
