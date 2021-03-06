var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var Link = require('./app/models/link');

mongoose.connect('mongodb://test:test@ds041140.mongolab.com:41140/fj-test');

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something happened.');
  next();
});  

router.get('/', function(req, res) {
  res.json({ message: 'Hello world!' }); 
});

router.route('/links')

  .post(function(req, res) {
    
    var link = new Link();
    link.url = req.body.url;
  
    link.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Link ' + link.url + ' created.' });
    });

  })

  .get(function(req, res) {

    Link.find(function(err, links) {

      if (err)
        res.send(err);

      res.json(links)
    })
  });

router.route('/links/:link_id')

  .get(function(req, res) {
    Link.findById(req.params.link_id, function(err, link) {
      if (err)
        res.send(err);
      res.json(link);
    });
  })

  .put(function(req, res) {

    Link.findById(req.params.link_id, function(err, link) {

      if (err)
        res.send(err);

      link.url = req.body.url;
      link.description = req.body.description;

      link.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Link updated!' });
      });

    });
  })

  .delete(function(req, res) {
    Link.remove({
      _id: req.params.link_id
    }, function(err, link) {
      if (err)
        res.send(err);

      res.json({ message: 'Deleted.' });
    });
  });

app.use('/api', router);

app.listen(port);
console.log('Server running on port ' + port);