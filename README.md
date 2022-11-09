# OTP
A very basic implementation of 2 API calls for generating and verifying OTP

## Getting Started
1. Clone the repo
```
git clone https://github.com/bebarle/otp.git
```

2. Install the app dependencies:
```
cd otp
npm install
```

3. Config
There is a .env file to manage timeout and port.  
Default values are:
PORT = 3000
REQUEST_TIMEOUT_IN_SECONDS=60

4.  Run
```
npm start
```

The endpoints are:
http://localhost:3000/otp
http://localhost:3000/otp/validate