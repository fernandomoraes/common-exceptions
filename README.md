common-exception
=========

Common exceptions to help handle easily exceptions in nodejs application

## Installation

`npm install --save common-exception`

## Usage

```javascript
var exceptions = require('common-exceptions');
var EntityNotFoundException = exceptions.EntityNotFoundException;

try {
  foo();
} catch (err) {
  console.log(err instanceof EntityNotFoundException); //logs true
}

function foo() {
  throw new EntityNotFoundException('Not found entity with id 2');
}
```

## Exceptions

Currently there are the following exceptions for use:

* EntityNotFoundException
* ValidationException
* IllegalArgumentException

## Examples

### Global express exception handler

```javascript
var app = require('express').app();
var ValidationException = require('common-exceptions').ValidationException;

app.post('/users', (req, res) => {
    let user = req.body;
    if (user.age <= 18) {
      throw new ValidationException('users must be over 18 years old!');
    }
});

app.use((err, req, res, next) => {
  if (err instanceof ValidationException) {
    res.status(422).send({ message: err.message });
  }
});
```

## TODO

* Add tests
* Allow to register new exceptions in runtime
