# Backend Setup

## Prerequisites
- Node.js
- MongoDB (local or Atlas)

## Environment Variables
Create a `.env` file in the BackEnd directory:
```
MONGO_URL=mongodb://localhost:27017/code-reviewer
SESSION_SECRET=supersecret
```

## Install Dependencies
```
npm install
```

## Run the Server
```
npm start
```

## API Endpoints
- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Login and receive JWT
- `POST /auth/logout` - Logout user
- `GET /user/me` - Get current user info (JWT required)
- `GET /user/protected` - Example protected route 