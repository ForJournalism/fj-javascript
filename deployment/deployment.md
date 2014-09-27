# Deployment

Let's get our API project ready for deployment. We'll need to:

1. Abstract our private information
2. Serve public HTML
3. Deploy to Heroku

## Abstract our private information

### Create a file to hold your database connection info

```
mkdir config && cd config
touch db.js
cd ..
```

Move database URL to ./config/db.js

```
module.exports = {
  url : 'mongodb://test:test@ds041140.mongolab.com:41140/fj-test'
}
```

Add to server.js

`var db = require('./config/db');`

Change Mongoose connection use this object property

`mongoose.connect(db.url);`

Start up the server and test it out.

### Serve public HTML

Add to server.js above bodyParser

`app.use(express.static(__dirname + '/public'));`

Create a public folder then HTML and CSS files

```
mkdir public && cd public
touch index.html && touch client.js
cd ..
```

Add something to ./public/index.html and view in the browser.

Great place for documenting your endpoints or to display your links.

### Deploying to Heroku

Follow the official [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) guide

