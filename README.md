# SQL API Documentation

## Setup Instructions
To set up the API, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Nauman-Irshad/sql_api.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   ```bash
   cp .env.example .env
   ```
4. Migrate the database:
   ```bash
   npm run migrate
   ```
5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints Documentation
- **GET /api/users**: Retrieve a list of users.
- **POST /api/users**: Create a new user.
- **GET /api/users/{id}**: Retrieve a user by ID.
- **PUT /api/users/{id}**: Update a user by ID.
- **DELETE /api/users/{id}**: Delete a user by ID.

## Database Schema
### Users Table
| Column Name | Data Type | Description                |
|-------------|-----------|----------------------------|
| id          | INT       | Primary Key                |
| name        | VARCHAR   | Name of the user           |
| email       | VARCHAR   | Email of the user          |
| password    | VARCHAR   | Password (hashed)          |
| created_at  | TIMESTAMP | When the user was created  |
| updated_at  | TIMESTAMP | When the user was updated   |

