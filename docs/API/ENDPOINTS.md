# API Endpoints

Detailed documentation for all Pokémon API endpoints.

## Base URL

```
http://localhost:3000
```

---

## 1. Create a Pokémon

Creates a new Pokémon with all required stats and properties.

### Request

```http
POST /pokemon
Content-Type: application/json

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

### Response

**Status:** `201 Created`

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

### Error Response

**Status:** `400 Bad Request`

```json
{
  "statusCode": 400,
  "message": "Invalid input data",
  "error": "Bad Request"
}
```

### Notes

- All fields are required
- Stats must be numbers between 1 and 255
- Name and type must be strings

---

## 2. Get All Pokémon

Retrieves a list of all Pokémon in the database.

### Request

```http
GET /pokemon
```

### Response

**Status:** `200 OK`

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

### Notes

- Returns all Pokémon in the database
- No pagination is implemented
- Results are ordered by creation date

---

## 3. Get a Pokémon by ID

Retrieves a specific Pokémon by its MongoDB ID.

### Request

```http
GET /pokemon/:id
```

### URL Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | String | Yes | MongoDB ID of the Pokémon |

### Example

```http
GET /pokemon/507f1f77bcf86cd799439011
```

### Response

**Status:** `200 OK`

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

### Error Response

**Status:** `404 Not Found`

```json
{
  "statusCode": 404,
  "message": "Pokémon not found",
  "error": "Not Found"
}
```

### Notes

- The ID must be a valid MongoDB ObjectId
- Returns 404 if the Pokémon does not exist

---

## 4. Update a Pokémon

Updates one or more properties of an existing Pokémon. All fields are optional.

### Request

```http
PATCH /pokemon/:id
Content-Type: application/json

{
  "hp": 40,
  "attack": 60
}
```

### URL Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | String | Yes | MongoDB ID of the Pokémon to update |

### Request Body

All fields are optional. Only include the fields you want to update.

```json
{
  "name": "Pikachu",
  "type": "Electric",
  "hp": 40,
  "attack": 60,
  "defense": 40,
  "spAtk": 50,
  "spDef": 50,
  "speed": 90
}
```

### Response

**Status:** `200 OK`

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

### Error Response

**Status:** `404 Not Found`

```json
{
  "statusCode": 404,
  "message": "Pokémon not found",
  "error": "Not Found"
}
```

### Notes

- All fields are optional
- Only provided fields will be updated
- The `updatedAt` timestamp is automatically updated
- Stats must be numbers between 1 and 255 if provided

---

## 5. Delete a Pokémon

Permanently deletes a Pokémon from the database.

### Request

```http
DELETE /pokemon/:id
```

### URL Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | String | Yes | MongoDB ID of the Pokémon to delete |

### Example

```http
DELETE /pokemon/507f1f77bcf86cd799439011
```

### Response

**Status:** `200 OK`

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

### Error Response

**Status:** `404 Not Found`

```json
{
  "statusCode": 404,
  "message": "Pokémon not found",
  "error": "Not Found"
}
```

### Notes

- The deleted Pokémon is returned in the response
- The Pokémon cannot be recovered after deletion
- Returns 404 if the Pokémon does not exist

---

## Common Response Codes

| Code | Scenario |
|------|----------|
| `200` | Successful GET, PATCH, or DELETE |
| `201` | Successful POST (resource created) |
| `400` | Invalid request data (missing fields, wrong types, etc.) |
| `404` | Resource not found |
| `500` | Server error |

## Error Handling

All error responses follow this format:

```json
{
  "statusCode": <HTTP_STATUS_CODE>,
  "message": "<Error message>",
  "error": "<Error type>"
}
```

## Rate Limiting

Currently, there is no rate limiting. The API can handle requests as fast as your server can process them.

## Timeouts

- Default request timeout: 30 seconds
- MongoDB connection timeout: 10 seconds

## Next Steps

- See [EXAMPLES.md](./EXAMPLES.md) for code examples
- Check [Testing Guide](../GUIDES/TESTING.md) for testing instructions
