const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const secret = require('./secret');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = secret.secret;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  const aboutus = [
    {body: 'Consequat sit torquent enim suscipit mus ipsum, lectus justo sociis vulputate pulvinar nulla turpis ut nec, dis odio interdum elit. Lorem lacus natoque mauris erat enim rutrum egestas rutrum mauris nam natoque suspendisse quisque purus. Ipsum dolor vivamus, imperdiet arcu sociosqu viverra vel interdum. Dignissim cum potenti mi. Consequat habitant viverra at vitae malesuada interdum. Turpis quam laoreet est conubia in hendrerit ultricies velit facilisi malesuada metus dignissim duis sollicitudin fusce velit dis posuere ullamcorper a duis id, feugiat, curae; iaculis donec, cras tempor diam dapibus nascetur. Fames mattis adipiscing bibendum magna sodales rutrum lobortis parturient sociis purus. Viverra ipsum ornare, taciti in. Mauris libero, facilisi hymenaeos Dis. Nibh nullam curabitur cubilia orci Sagittis diam sit mauris egestas Ac hymenaeos auctor purus. Sollicitudin. At bibendum vel justo parturient etiam tempus torquent ornare rutrum. Parturient nunc posuere nulla eros varius sodales eleifend conubia class molestie ac etiam. Mauris cursus potenti consectetuer a nullam etiam bibendum metus id convallis orci quis malesuada commodo. Convallis. Lacus. Cras. Lacinia urna semper odio eleifend aenean. Mauris viverra ante vel sem malesuada cubilia lacus, placerat facilisis gravida aliquam et hymenaeos tellus penatibus libero quisque sociosqu ridiculus donec eleifend commodo Imperdiet praesent rhoncus vehicula diam fames curae;. Malesuada. Duis posuere ac. Sociis suspendisse magnis nonummy. Nam litora aptent blandit nisi. Pulvinar diam. Blandit amet porttitor nam non urna lacinia eget Sed molestie mauris aliquam ridiculus arcu congue conubia malesuada mattis. Quis nascetur sodales primis laoreet lectus fames suscipit netus. Lacus vehicula dictumst mattis nam non platea orci duis senectus placerat est tortor vestibulum porta sed tortor risus pharetra libero integer. Vehicula gravida sodales habitasse placerat tellus tempus quisque varius commodo senectus montes tristique aenean sit elit curae;.'}
  ];
  res.render('about', { title: 'about', aboutus});
})

// blog rooutes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});