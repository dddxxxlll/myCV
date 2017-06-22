var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

var appData = require('./data.json');
var introduction = appData.introduction;
var experience = appData.experience;
var skills = appData.skills;

var apiRoutes = express.Router();

apiRoutes.get('/introduction', function (req, res) {
  res.json({
    errno: 0,
    introduction: introduction
  });
});

apiRoutes.get('/experience', function (req, res) {
  res.json({
    errno: 0,
    experience: experience
  });
});

apiRoutes.get('/skills', function (req, res) {
  res.json({
    errno: 0,
    skills: skills
  });
});

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
};
