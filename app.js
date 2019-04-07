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
var fotoemp=require('./routes/fotoemp');
var cerrarsesion=require('./routes/cerrarsesion');
var esp=require('./routes/especialidad');
var vid=require('./routes/video');
var asp=require('./routes/aspirante');
var aspirantes=require('./routes/aspirantes');
var aspint=require('./routes/asp-interested');
var update=require('./routes/mod-asp');
var cv=require('./routes/asp-curriculum');
var addcv=require('./routes/asp-a-curriculum');
var pdfCv=require('./routes/curriculum');
var profileE=require('./routes/emp-profile');
var fail=require('./routes/error');
var exito=require('./routes/exito');
var updateE=require('./routes/updateEmp');
var empProAsp=require('./routes/emp-profile-asp');
var recuperar = require('./routes/recuperar');


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

app.use('/empresa',empProAsp);
app.use('/updateE',updateE);
app.use('/', indexRouter);
app.use('/exito',exito);
app.use('/emp-profile',profileE);
app.use('/error',fail);
app.use('/index',indexRouter);
app.use('/regasp',registroa);
app.use('/regemp',registroe);
app.use('/loginasp',logina);
app.use('/loginemp',loginemp);
app.use('/perfilasp',perfilasp);
app.use('/portafolio',portafolio);
app.use('/fotoasp',fotoasp);
app.use('/fotoemp',fotoemp);
app.use('/users', usersRouter);
app.use('/cerrarsesion',cerrarsesion);
app.use('/especialidad',esp);
app.use('/video',vid);
app.use('/aspirante',asp);
app.use('/aspirantes',aspirantes);
app.use('/asp-interested',aspint);
app.use('/update',update);
app.use('/asp-cv',cv);
app.use('/add-cv',addcv);
app.use('/curriculum',pdfCv);
app.use('/recuperar',recuperar);


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
