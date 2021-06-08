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
  const aboutus = [
    {body: 'Consequat sit torquent enim suscipit mus ipsum, lectus justo sociis vulputate pulvinar nulla turpis ut nec, dis odio interdum elit. Lorem lacus natoque mauris erat enim rutrum egestas rutrum mauris nam natoque suspendisse quisque purus. Ipsum dolor vivamus, imperdiet arcu sociosqu viverra vel interdum. Dignissim cum potenti mi. Consequat habitant viverra at vitae malesuada interdum. Turpis quam laoreet est conubia in hendrerit ultricies velit facilisi malesuada metus dignissim duis sollicitudin fusce velit dis posuere ullamcorper a duis id, feugiat, curae; iaculis donec, cras tempor diam dapibus nascetur. Fames mattis adipiscing bibendum magna sodales rutrum lobortis parturient sociis purus. Viverra ipsum ornare, taciti in. Mauris libero, facilisi hymenaeos Dis. Nibh nullam curabitur cubilia orci Sagittis diam sit mauris egestas Ac hymenaeos auctor purus. Sollicitudin. At bibendum vel justo parturient etiam tempus torquent ornare rutrum. Parturient nunc posuere nulla eros varius sodales eleifend conubia class molestie ac etiam. Mauris cursus potenti consectetuer a nullam etiam bibendum metus id convallis orci quis malesuada commodo. Convallis. Lacus. Cras. Lacinia urna semper odio eleifend aenean. Mauris viverra ante vel sem malesuada cubilia lacus, placerat facilisis gravida aliquam et hymenaeos tellus penatibus libero quisque sociosqu ridiculus donec eleifend commodo Imperdiet praesent rhoncus vehicula diam fames curae;. Malesuada. Duis posuere ac. Sociis suspendisse magnis nonummy. Nam litora aptent blandit nisi. Pulvinar diam. Blandit amet porttitor nam non urna lacinia eget Sed molestie mauris aliquam ridiculus arcu congue conubia malesuada mattis. Quis nascetur sodales primis laoreet lectus fames suscipit netus. Lacus vehicula dictumst mattis nam non platea orci duis senectus placerat est tortor vestibulum porta sed tortor risus pharetra libero integer. Vehicula gravida sodales habitasse placerat tellus tempus quisque varius commodo senectus montes tristique aenean sit elit curae;. Nisi quis cursus mauris est at nam libero. Quam ultrices eros velit vestibulum. Etiam enim eleifend imperdiet metus hendrerit ridiculus vel taciti augue pede consectetuer diam pretium. Diam fames neque sed. Vitae fames consequat enim venenatis eu in mattis quis vitae parturient etiam dictum mus, convallis. Leo. Magna sagittis. Suspendisse integer scelerisque sagittis tempor facilisi ridiculus augue aptent ultrices placerat facilisis scelerisque torquent taciti, aliquet fermentum. Duis sit Volutpat rutrum potenti feugiat per rhoncus dignissim egestas dolor duis primis lacinia aptent. Taciti venenatis mauris. Ornare metus quis purus, etiam pellentesque magna libero erat hendrerit dictum. Sodales augue risus. Aenean consequat. Pretium torquent turpis ligula, lectus lacinia aliquam interdum sociis varius sem magna arcu parturient lectus taciti dapibus ut viverra cras diam. Commodo posuere sem tellus arcu luctus enim. Ullamcorper hendrerit euismod congue justo interdum. Natoque tristique ullamcorper nascetur nibh hymenaeos suspendisse torquent lectus ullamcorper. Felis fermentum sollicitudin. Inceptos hymenaeos nibh lorem nisl pharetra laoreet mus phasellus Mi dui lectus pharetra lacinia auctor vehicula faucibus praesent sociis, ligula. Aenean. Torquent egestas porttitor morbi interdum nunc mattis augue curabitur varius. Duis cras tortor suscipit vitae tellus posuere ac semper ornare ullamcorper iaculis a montes justo dignissim. Cras posuere cum semper iaculis. Pulvinar tempus. Tortor tortor vitae aliquam donec aliquam Quam. Pede in condimentum lorem primis sed volutpat. Phasellus nisl conubia proin fermentum.'}
  ];
  res.render('about', { title: 'about', aboutus});
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'create a new blog'});
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404'});
})

