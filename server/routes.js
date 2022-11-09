import otpRouter from './api/controllers/otp/router';

export default function routes(app) {
  app.use('/otp', otpRouter)
}