# Backend Notes APIs Assignment
A secure authentication mechanism using JWT token and a double-submit cookie pattern, and scalable notes apis built with NodeJS, ExpressJS, and MongoDB.

# Technologies:
- For Runtime envirnoment,
    - NodeJS: cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.
- For server,
    - ExpressJS: Web application framework for Node.js. It simplifies the process of building robust and scalable web applications.
- For DB,
    - MongoDB: Open-source NoSQL database that uses a document-oriented data model. It stores data in flexible, JSON-like BSON documents, making it highly scalable and suitable for a variety of applications.
- For security,
    - bcrypt: for hashing passwords securely
    - express-rate-limit: for rate-limiting requests
    - express-slow-down: for slowing down request rates
    - jsonwebtoken: for generating and verifying JSON Web Tokens (JWT)
- For validation,
    - joi: Object schema description language and validator for JavaScript objects. It is often used for input validation and ensuring data integrity.
- For testing,
    - Jest:  for writing tests and ensuring code quality.
    - Supertest: for testing HTTP assertions    

## ⚙ Installation

Follow these steps to set up Repo locally:

1. Clone the repository: 
```
git clone https://github.com/Maran1947/backend-notes-apis-assignment.git
```

2. Install the required dependencies:
```
cd backend-notes-apis-assignment
npm install
```

3. Set up the configuration file:
- Create an .env file in the root folder of the repo.
- Update the necessary environment variables in the `.env` file, such as database credentials and token secrets.
```
TEMPLATE: .env: 
PORT=8000
MONGODB_URI=<MONGODB_URI>
TEST_MONGODB_URI=<TEST_MONGODB_URI>
TOKEN_KEY=qpr@290_0^6ty
JWT_EXPIRES=1h
ACCESS_TOKEN_EXPIRES=60*1000
RF_EXPIRES=60*1000
REFRESH_TOKEN_SECRET=<REFRESH_TOKEN_SECRET>
ENCRYPT_RF_KEY=<ENCRYPT_RF_KEY>
ENCRYPT_RF_IV=<ENCRYPT_RF_IV>
```

- Run the following commands to generate REFRESH_TOKEN_SECRET, ENCRYPT_RF_KEY, and ENCRYPT_RF_IV
```
cd src/api/utils
node generateSecret.js
```

4. Start the server:
```
npm run dev 
```

5. Access server in your web browser at `http://localhost:8000`.

## 🛠 Testing APIs

- You can run any of the following commands:
```
npm test or npm run test
```
