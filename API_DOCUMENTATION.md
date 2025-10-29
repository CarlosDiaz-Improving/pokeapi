# Pokémon API - Complete Documentation

## Overview

The Pokémon API is a comprehensive REST API for managing Pokémon data. It provides full CRUD (Create, Read, Update, Delete) operations for Pokémon with detailed stats and properties. The API is built with NestJS and MongoDB, and includes interactive documentation through Swagger UI and Scalar API Reference.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB (local or Atlas)

### Installation

```bash
npm install
```

### Configuration

1. Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

2. Update environment variables:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pokemon?retryWrites=true&w=majority
PORT=3000
```

### Running the Application

**Development mode:**
```bash
npm run start:dev
```

**Production mode:**
```bash
npm run build
npm run start:prod
```

## API Documentation Endpoints

Once the application is running, access the documentation at:

- **Swagger UI**: `http://localhost:3000/api`
- **Scalar Reference**: `http://localhost:3000/reference`

Both provide interactive documentation where you can test endpoints directly.

## Base URL

```
http://localhost:3000
```

## Authentication

Currently, the API does not require authentication. All endpoints are publicly accessible.

## Response Format

All responses are in JSON format. Successful responses include the requested data, while error responses include an error message.

### Success Response Example

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Pikachu",
  "type": "Electric",
  "hp": 35,
  "attack": 55,
  "defense": 40,
  "spAtk": 50,
  "spDef": 50,
  "speed": 90,
  "createdAt": "2025-10-28T23:30:00.000Z",
  "updatedAt": "2025-10-28T23:30:00.000Z"
}
```

## HTTP Status Codes

- `200 OK` - Request successful
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request data
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

## Pokémon Model

### Properties

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `_id` | String | Auto | MongoDB unique identifier | `507f1f77bcf86cd799439011` |
| `name` | String | Yes | Pokémon name | `Pikachu` |
| `type` | String | Yes | Pokémon type | `Electric` |
| `hp` | Number | Yes | Hit points (health) | `35` |
| `attack` | Number | Yes | Attack power | `55` |
| `defense` | Number | Yes | Defense power | `40` |
| `spAtk` | Number | Yes | Special attack power | `50` |
| `spDef` | Number | Yes | Special defense power | `50` |
| `speed` | Number | Yes | Speed stat | `90` |
| `createdAt` | Date | Auto | Creation timestamp | `2025-10-28T23:30:00.000Z` |
| `updatedAt` | Date | Auto | Last update timestamp | `2025-10-28T23:30:00.000Z` |

## API Endpoints

### 1. Create a Pokémon

**Endpoint:** `POST /pokemon`

**Description:** Creates a new Pokémon with all required stats and properties.

**Request Body:**
```json
{
  "name": "Pikachu",
  "type": "Electric",
  "hp": 35,
  "attack": 55,
  "defense": 40,
  "spAtk": 50,
  "spDef": 50,
  "speed": 90
}
```

**Response:** `201 Created`
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Pikachu",
  "type": "Electric",
  "hp": 35,
  "attack": 55,
  "defense": 40,
  "spAtk": 50,
  "spDef": 50,
  "speed": 90,
  "createdAt": "2025-10-28T23:30:00.000Z",
  "updatedAt": "2025-10-28T23:30:00.000Z"
}
```

**Error Response:** `400 Bad Request`
```json
{
  "statusCode": 400,
  "message": "Invalid input data"
}
```

---

### 2. Get All Pokémon

**Endpoint:** `GET /pokemon`

**Description:** Retrieves a list of all Pokémon in the database.

**Query Parameters:** None

**Response:** `200 OK`
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Pikachu",
    "type": "Electric",
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "spAtk": 50,
    "spDef": 50,
    "speed": 90,
    "createdAt": "2025-10-28T23:30:00.000Z",
    "updatedAt": "2025-10-28T23:30:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Charizard",
    "type": "Fire/Flying",
    "hp": 78,
    "attack": 84,
    "defense": 78,
    "spAtk": 109,
    "spDef": 85,
    "speed": 100,
    "createdAt": "2025-10-28T23:35:00.000Z",
    "updatedAt": "2025-10-28T23:35:00.000Z"
  }
]
```

---

### 3. Get a Pokémon by ID

**Endpoint:** `GET /pokemon/:id`

**Description:** Retrieves a specific Pokémon by its MongoDB ID.

**URL Parameters:**
- `id` (required) - The MongoDB ID of the Pokémon

**Example Request:**
```
GET /pokemon/507f1f77bcf86cd799439011
```

**Response:** `200 OK`
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Pikachu",
  "type": "Electric",
  "hp": 35,
  "attack": 55,
  "defense": 40,
  "spAtk": 50,
  "spDef": 50,
  "speed": 90,
  "createdAt": "2025-10-28T23:30:00.000Z",
  "updatedAt": "2025-10-28T23:30:00.000Z"
}
```

**Error Response:** `404 Not Found`
```json
{
  "statusCode": 404,
  "message": "Pokémon not found"
}
```

---

### 4. Update a Pokémon

**Endpoint:** `PATCH /pokemon/:id`

**Description:** Updates one or more properties of an existing Pokémon. All fields are optional.

**URL Parameters:**
- `id` (required) - The MongoDB ID of the Pokémon to update

**Request Body (all fields optional):**
```json
{
  "hp": 40,
  "attack": 60
}
```

**Example Request:**
```
PATCH /pokemon/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "hp": 40,
  "attack": 60
}
```

**Response:** `200 OK`
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Pikachu",
  "type": "Electric",
  "hp": 40,
  "attack": 60,
  "defense": 40,
  "spAtk": 50,
  "spDef": 50,
  "speed": 90,
  "createdAt": "2025-10-28T23:30:00.000Z",
  "updatedAt": "2025-10-28T23:40:00.000Z"
}
```

**Error Response:** `404 Not Found`
```json
{
  "statusCode": 404,
  "message": "Pokémon not found"
}
```

---

### 5. Delete a Pokémon

**Endpoint:** `DELETE /pokemon/:id`

**Description:** Permanently deletes a Pokémon from the database.

**URL Parameters:**
- `id` (required) - The MongoDB ID of the Pokémon to delete

**Example Request:**
```
DELETE /pokemon/507f1f77bcf86cd799439011
```

**Response:** `200 OK`
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Pikachu",
  "type": "Electric",
  "hp": 35,
  "attack": 55,
  "defense": 40,
  "spAtk": 50,
  "spDef": 50,
  "speed": 90,
  "createdAt": "2025-10-28T23:30:00.000Z",
  "updatedAt": "2025-10-28T23:30:00.000Z"
}
```

**Error Response:** `404 Not Found`
```json
{
  "statusCode": 404,
  "message": "Pokémon not found"
}
```

---

## Usage Examples

### Using cURL

**Create a Pokémon:**
```bash
curl -X POST http://localhost:3000/pokemon \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Pikachu",
    "type": "Electric",
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "spAtk": 50,
    "spDef": 50,
    "speed": 90
  }'
```

**Get all Pokémon:**
```bash
curl http://localhost:3000/pokemon
```

**Get a specific Pokémon:**
```bash
curl http://localhost:3000/pokemon/507f1f77bcf86cd799439011
```

**Update a Pokémon:**
```bash
curl -X PATCH http://localhost:3000/pokemon/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "hp": 40,
    "attack": 60
  }'
```

**Delete a Pokémon:**
```bash
curl -X DELETE http://localhost:3000/pokemon/507f1f77bcf86cd799439011
```

### Using JavaScript/Fetch

**Create a Pokémon:**
```javascript
const response = await fetch('http://localhost:3000/pokemon', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Pikachu',
    type: 'Electric',
    hp: 35,
    attack: 55,
    defense: 40,
    spAtk: 50,
    spDef: 50,
    speed: 90,
  }),
});

const data = await response.json();
console.log(data);
```

**Get all Pokémon:**
```javascript
const response = await fetch('http://localhost:3000/pokemon');
const data = await response.json();
console.log(data);
```

---

## Deployment

### Vercel Deployment

1. Ensure `.env` is in `.gitignore` (already configured)
2. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: 3000 (optional)
3. Deploy with `git push`

### Environment Variables

- `MONGODB_URI` - MongoDB connection string (required)
- `PORT` - Server port (default: 3000)

---

## Troubleshooting

### MongoDB Connection Issues

If you encounter MongoDB connection errors:

1. Verify `MONGODB_URI` in `.env` file
2. Ensure MongoDB is running (if local)
3. Check credentials are correct (if MongoDB Atlas)
4. Verify IP is whitelisted in MongoDB Atlas (if cloud)

### Port Already in Use

If port 3000 is already in use:

```bash
PORT=3001 npm run start:dev
```

### API Not Responding

Check the console logs for error messages. The application logs startup information including:
- Pokémon API running message
- Swagger UI URL
- Scalar Reference URL

---

## Support

For issues or questions:
- Check the Swagger UI documentation at `/api`
- Review the Scalar Reference at `/reference`
- Check application logs for error details

---

## License

MIT License - See LICENSE file for details
