const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

app.use(require('./routes/main'))