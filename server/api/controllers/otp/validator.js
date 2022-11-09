class Validator {
  send(request, response, next) {
    // validate response
    // valid: 
    next();
    // else
    // resonse.status(400).send('Unable to process request at this time.');
    // response.status(200).send();
  }
}

export default new Validator()