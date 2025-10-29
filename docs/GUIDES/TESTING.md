# Testing Guide

Comprehensive guide for testing the Pokémon API.

## Prerequisites

- API running on `http://localhost:3000`
- cURL or Postman installed (for manual testing)

## Testing with cURL

### 1. Create a Pokémon

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

**Expected Response:**
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

### 2. Get All Pokémon

```bash
curl http://localhost:3000/pokemon
```

**Expected Response:**
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
  }
]
```

### 3. Get a Specific Pokémon

Replace `507f1f77bcf86cd799439011` with an actual ID from the previous request.

```bash
curl http://localhost:3000/pokemon/507f1f77bcf86cd799439011
```

**Expected Response:**
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

### 4. Update a Pokémon

```bash
curl -X PATCH http://localhost:3000/pokemon/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "hp": 40,
    "attack": 60
  }'
```

**Expected Response:**
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

### 5. Delete a Pokémon

```bash
curl -X DELETE http://localhost:3000/pokemon/507f1f77bcf86cd799439011
```

**Expected Response:**
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

## Testing with Postman

### Setup

1. Open Postman
2. Create a new collection called "Pokémon API"
3. Create environment variables:
   - `base_url`: `http://localhost:3000`
   - `pokemon_id`: (leave empty, will be filled after creating a Pokémon)

### Create Requests

#### 1. Create Pokémon

- **Name**: Create Pokémon
- **Method**: POST
- **URL**: `{{base_url}}/pokemon`
- **Headers**: 
  - `Content-Type: application/json`
- **Body** (raw JSON):
```json
{
  "name": "Charizard",
  "type": "Fire/Flying",
  "hp": 78,
  "attack": 84,
  "defense": 78,
  "spAtk": 109,
  "spDef": 85,
  "speed": 100
}
```

**Tests Tab** (to save the ID for later requests):
```javascript
if (pm.response.code === 201) {
  var jsonData = pm.response.json();
  pm.environment.set("pokemon_id", jsonData._id);
}
```

#### 2. Get All Pokémon

- **Name**: Get All Pokémon
- **Method**: GET
- **URL**: `{{base_url}}/pokemon`

#### 3. Get Pokémon by ID

- **Name**: Get Pokémon by ID
- **Method**: GET
- **URL**: `{{base_url}}/pokemon/{{pokemon_id}}`

#### 4. Update Pokémon

- **Name**: Update Pokémon
- **Method**: PATCH
- **URL**: `{{base_url}}/pokemon/{{pokemon_id}}`
- **Headers**: 
  - `Content-Type: application/json`
- **Body** (raw JSON):
```json
{
  "hp": 80,
  "attack": 90
}
```

#### 5. Delete Pokémon

- **Name**: Delete Pokémon
- **Method**: DELETE
- **URL**: `{{base_url}}/pokemon/{{pokemon_id}}`

## Running Tests

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

### Test Coverage

```bash
npm run test:cov
```

## Sample Pokémon for Testing

### Pikachu
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

### Charizard
```json
{
  "name": "Charizard",
  "type": "Fire/Flying",
  "hp": 78,
  "attack": 84,
  "defense": 78,
  "spAtk": 109,
  "spDef": 85,
  "speed": 100
}
```

### Blastoise
```json
{
  "name": "Blastoise",
  "type": "Water",
  "hp": 79,
  "attack": 83,
  "defense": 100,
  "spAtk": 85,
  "spDef": 105,
  "speed": 78
}
```

### Venusaur
```json
{
  "name": "Venusaur",
  "type": "Grass/Poison",
  "hp": 80,
  "attack": 82,
  "defense": 83,
  "spAtk": 100,
  "spDef": 100,
  "speed": 80
}
```

### Dragonite
```json
{
  "name": "Dragonite",
  "type": "Dragon/Flying",
  "hp": 91,
  "attack": 134,
  "defense": 95,
  "spAtk": 100,
  "spDef": 100,
  "speed": 80
}
```

## HTTP Response Codes

| Code | Meaning | When |
|------|---------|------|
| `201` | Created | Pokémon created successfully |
| `200` | OK | Successful GET, PATCH, or DELETE |
| `400` | Bad Request | Invalid or incomplete data |
| `404` | Not Found | Pokémon not found |
| `500` | Internal Server Error | Server error |

## Verification Checklist

- [ ] Can create a Pokémon with all required fields
- [ ] Can retrieve all Pokémon
- [ ] Can retrieve a specific Pokémon by ID
- [ ] Can update Pokémon fields
- [ ] Can delete a Pokémon
- [ ] Returns 404 for non-existent Pokémon
- [ ] Returns 400 for invalid data
- [ ] Timestamps are automatically set

## Troubleshooting

### Connection Refused

**Error**: `curl: (7) Failed to connect to localhost port 3000`

**Solution**: Ensure the API is running:
```bash
npm run start:dev
```

### Invalid JSON

**Error**: `SyntaxError: Unexpected token < in JSON at position 0`

**Solution**: Ensure the API is running and returning JSON (not HTML error page)

### MongoDB Connection Error

**Error**: `MongooseError: Cannot connect to MongoDB`

**Solution**: 
1. Verify MongoDB is running
2. Check `MONGODB_URI` in `.env` file
3. Verify credentials are correct

### Pokémon Not Found

**Error**: `404 Not Found`

**Solution**: 
1. Verify the ID is correct
2. Ensure the Pokémon was created successfully
3. Check if it was deleted

## Performance Testing

### Load Testing with Apache Bench

```bash
# Install Apache Bench (macOS)
brew install httpd

# Test 100 requests with 10 concurrent
ab -n 100 -c 10 http://localhost:3000/pokemon
```

### Load Testing with wrk

```bash
# Install wrk
brew install wrk

# Test with 4 threads, 100 connections for 30 seconds
wrk -t4 -c100 -d30s http://localhost:3000/pokemon
```

## Next Steps

- See [API Examples](../API/EXAMPLES.md) for more code examples
- Check [Endpoints Documentation](../API/ENDPOINTS.md) for detailed endpoint specs
