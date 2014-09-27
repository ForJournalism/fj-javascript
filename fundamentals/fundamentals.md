# Part 1: Fundamentals

Open Chrome Developer Tools

Click on the Console

## print a string

Dave
"Dave"

## define a variable

name = "Dave"
name

## working with numbers

34
34 + 2
34 - 2
34 * 2
34 / 2
34 % 2
34 * 2 + 2
34 * (2 + 2)
34*(2+2)

## variable numbers

age = "34"
age = 34
age
age * 2
age / 2
age

## changing our number

age = age + 1
age += 1

## function to change our age each birthday

birthday = function(number) {
  number = number + 1
  return number
}

## Let's pass some numbers to our birthday function

birthday(34)
birthday(age)
age

### Hmmm why didn't our age increment permanently?

age = birthday(age)

### There we go. Now let's see what happens if we set a variable inside a function that wasn't passed.

birthday = function(number) {
  number = number + 1
  candles = number
  return number
}

### What is our age?

age
candles

### Right now our birthday function is just an incrementor, which isn't very useful. Let's try to update our age value inside the function itself.

birthday = function(age) {
  age = age + 1
  candles = age
  return age
}

age
candles

## WTF?!?! Age has two different scopes here. Scoping is frustrating.

### Let's refactor this now.

### And change variable names b/c scope

birthday = function(then) {
  now = then + 1
  return now
}

birthday(34)
then = 34
birthday(then)
now
then

[When will then be now?](https://www.youtube.com/watch?v=5hH_K2Z0NO0)

## Objects using consutructor function

var birthdate = new Object();
birthdate.month = 06;
birthdate.day = 13;
birthdate.year = 1980;

## Let's use a Date() object instead

var birthdate = new Date(1980,06,13,0,0,0,0);

## Invitations object using an object initializer

var invitation = {
  name: "Lucy",
  coming: "yes"
}

# We have many invitations, so we could use an arry for a collection of names

var invited = ["Lucy","Tibby","Autumn"];

## We look up using an index

invited[1]

## Add more information

var invitations = [
  {
    "name": "Lucy",
    "coming": "yes",
    "age": "9"
  },
    {
    "name": "Tibby",
    "coming": "yes",
    "age": "7"
  },
    {
    "name": "Autumn",
    "coming": "maybe",
    "age": "34"
  }];

## Let's lookup info from this collection

invitations.name;
invitations[1].name;
console.log(invitations[1].name);

Object.keys(invitations)
Object.keys(invitations[1])

## Who is invited? Let's use a "for" loop to step through each person.

for (var i = 0; i < invitations.length; i++) {
  console.log(invitations[i].name);
};

## Also we can use the forEach method

invitations.forEach(function(entry) {
  console.log(entry)
})

invitations.forEach(function(entry) {
  console.log(entry.name)
})

## What about only seeing who is coming? 

### We'll step through each person, check if they are coming and then print a message using string concatenation.

for (var i = 0; i < invitations.length; i++) {
  coming = (invitations[i].coming);
  if (coming == "yes") {
    console.log(invitations[i].name + " is coming!");
  }
};

### What about more complicated finding, sorting and filtering? Use http://underscorejs.org/

