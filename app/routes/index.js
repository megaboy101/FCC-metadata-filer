var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

module.exports = function (app) {
   var clickHandler = new ClickHandler();

   app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });

   app.route('/api')
      .post(upload.single('upl'), clickHandler.analyzeFile);
};
