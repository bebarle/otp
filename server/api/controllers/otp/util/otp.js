import totp from 'totp-generator';

export const generateOtp = () => {
  const token = totp('OVZWK4SAMVWWC2LMFZRW63I=', {
    digits: 6,
    algorithm: 'SHA-256',
    period: 180,
    timestamp: Date().now
  });

  return token;
};