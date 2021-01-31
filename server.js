const express = require('express');
const app = express();

app.use(express.static('./dist/av-cookbook-app'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/av-cookbook-app/'});
});

app.listen(process.env.PORT || 8080);