import { generateOtp } from './util/otp';

class Controller {
  send(request, response, next) {
    const token = generateOtp();
    response.status(200).send({
      token
    });
  }

  validate(request, response, next) {
    const { otp } = request.body;
    const token = generateOtp();
    const status = otp === token ? 200 : 400;
    response.status(status).send();
  }
}

export default new Controller()