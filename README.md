# Backend Notes APIs Assignment
A secure and scalable notes apis built with NodeJS.

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
TOKEN_KEY=<TEST_MONGODB_URI>
JWT_EXPIRES=<JWT_EXPIRES>
ACCESS_TOKEN_EXPIRES=<ACCESS_TOKEN_EXPIRES>
RF_EXPIRES=<RF_EXPIRES>
CSRF_SECRET=<CSRF_SECRET>
REFRESH_TOKEN_SECRET=<REFRESH_TOKEN_SECRET>
ENCRYPT_RF_KEY=<ENCRYPT_RF_KEY>
ENCRYPT_RF_IV=<ENCRYPT_RF_IV>
```

- For generate

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
