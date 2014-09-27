fj-javascript
=============

This workshop will provide an overview of JavaScript as a programming language and relevant journalism uses.

## Introduction

JavaScript is an interpreted programming language that can run in all modern web browsers. JavaScript also can be used to build server applications and databases. 

### [JavaScript fundamentals](fundamentals/fundamentals.md)

* Using various objects types to store information
* Functions let us calculate and transform information 
* We controlling flow of information through loops and conditional statements

### Walking skeleton

Let's setup the minimal amount of code that connects our various systems (client, server and database) together in order to build an application to store and retrieve environment inspection data.

## [Creating an API](api/api.md)

An application programming interface (API) is a fancy name for a structured name of a system that help you send and receive information from a different system. We use APIs to get social media activity streams and to create articles within a content management system (CMS). You interact with dozens of APIs every day. We will build basic API routes in JavaScript to send inspection data and have that date stored within a database.

### GET

A GET request asks our API to give us a list of all of the inspection records within our database.

### POST

We send a POST request to create a new inspection record.

### PUT

What if we need to edit a record? We'll use a PUT request.

### DELETE

A DELETE request removes a record from our database.

## Frontend

Let's build a web page that helps us use our API in a more friendly manner. We can think about this webpage as a graphical user interface (GUI) for our API.

### Angular

Angular is a JavaScript framework that helps us with the data binding (along with many other things) to build application that are used within a web browser.

## Testing

Does our application function like we expect? How can we prevent future work from accidentally breaking previous work? We'll touch on functional and unit tests.

## Deployment

Now we need to showoff our work! Let's deploy our application and discuss considerations for your software development life cycle (SDLC).
