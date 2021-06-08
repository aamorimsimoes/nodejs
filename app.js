const express = require('express');
const ejs = require('ejs');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Parturient aptent est orci rutrum.', snippet: 'Nibh risus. Parturient aptent est orci rutrum, eros mattis nec elit metus faucibus habitant iaculis tincidunt tempus montes amet conubia quisque, porttitor. Duis libero ullamcorper per hendrerit purus aptent tellus auctor inceptos.'},
    {title: 'Integer vel tempus, hac litora cras.', snippet: 'Integer vel tempus, hac litora cras. Imperdiet ligula, class, luctus tempus purus id ipsum massa est feugiat curabitur. Curae; eros gravida nam. Diam curabitur dignissim taciti.'},
    {title: 'Rutrum natoque nisl.', snippet: 'Rutrum natoque nisl. Nec posuere. Mattis odio pellentesque Nibh semper aenean montes sed vel litora senectus tempor aliquam nulla habitant vestibulum, tempus, a nullam curae;. Varius non, velit diam nascetur, torquent facilisis urna, nostra quisque non dolor varius quis dui Lacinia quis.'},
  ];

  res.render('index', { title: 'expressJS', blogs});
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'about'});
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'create a new blog'});
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404'});
})

