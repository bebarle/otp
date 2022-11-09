import * as express from 'express';
import controller from './controller';
import validator from './validator';

export default express.Router()
  .post('/', validator.send, controller.send)
  .post('/validate', validator.send, controller.validate);