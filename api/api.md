# Building an API with Node

This tutorial is heavily based on a [Scotch.io tutorial](http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4). Go there later for more awesome stuff.

## Download first 

1. [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en)

## Simple API server

### Folder setup

```
touch server.js
mkdir app && cd app
mkdir models && cd models 
touch link.js
cd ../..
```

### Initilize a Node project

`npm init`

### What Node packages do we need?

Add to package.json

```
"dependencies": {
  "express": "~4.0.0",
  "mongoose": "~3.6.13",
  "body-parser": "~1.0.1"
}
```
then run `npm install`

### Our first server

server.js should be:

```
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();     

router.get('/', function(req, res) {
  res.json({ message: 'Hello world!' }); 
});

app.use('/api', router);

app.listen(port);
console.log('Server running on port ' + port);
```

### Now let's see our working server in a browser and with Postman

Visit [localhost:8080/api](http://localhost:8080/api) in a browser to see "Hello world!"

Open Postman and send a GET request to http://localhost:8080/api/ 

## Mongo for our database

### Create a database

Add to server.js

```
var mongoose = require('mongoose');
mongoose.connect('');
```
Create a database at [Mongolab](https://mongolab.com/)

Add a user to the database

Paste database connection info into server.js

### Define a model

Add to ./app/models/link.js

```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkSchema = new Schema({
  url: String,
  description: String
});

module.exports = mongoose.model('Link', LinkSchema);
```

Add to server.js

`var Link = require('./app/models/link');`

### Basic logging

Add to server.js

```
router.use(function(req, res, next) {
  console.log('Something happened.');
  next();
});
```
Good time to talk about callback functions and async nature of Node.

Send GET in browser and Postman to see logging.

### Create a link record using POST request

Add to server.js

```
router.route('/links')

  .post(function(req, res) {
    
    var link = new Link();
    link.url = req.body.url;
    link.description = req.body.description;
  
    link.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Link ' + link.url + ' created.' });
    });

  })
```

Use Postman to create a few links.

Visit Mongolab to see the collection exists.

### List all of your links with a GET request

Add to server.js withing the `/links` route as another verb

```
.get(function(req, res) {

  Link.find(function(err, links) {

    if (err)
      res.send(err);

    res.json(links)
  })
});
```

### Routes for a single link

#### GET a single link by ID

Add to server.js

```
router.route('/links/:link_id')

  .get(function(req, res) {
    Link.findById(req.params.link_id, function(err, link) {
      if (err)
        res.send(err);
      res.json(link);
    });
  });
```

Send a GET to a specific _ID value and get a response.

#### Edit the link with PUT

Add to server.js while also removing the semicolon to properly chain


```
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
});
```

Now we'll send a PUT request to change the url and description.

Then use a GET request to confirm the update succeeded. 

Let's make our PUT fail by introducing a typo and then debug. Good to write tests and error handlers.

#### Delete a link with DELETE

Add to server.js while removing semicolon to allow for proper chaining

```
.delete(function(req, res) {
  Link.remove({
    _id: req.params.link_id
  }, function(err, link) {
    if (err)
      res.send(err);

    res.json({ message: 'Deleted.' });
  });
});
```

Send the DELETE request.

Send a GET to the same endpoint.

Send a GET to the /links endpoint to see you still have links but not the one you deleted.


