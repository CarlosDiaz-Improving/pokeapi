# Testing the Pokémon API

## Testing with cURL

Make sure the application is running on `http://localhost:3000`

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

Expected response:
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
  "updatedAt": "2025-10-28T23:30:00.000Z",
  "__v": 0
}
```

### 2. Get all Pokémon

```bash
curl http://localhost:3000/pokemon
```

### 3. Get a specific Pokémon

```bash
curl http://localhost:3000/pokemon/507f1f77bcf86cd799439011
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

### 5. Delete a Pokémon

```bash
curl -X DELETE http://localhost:3000/pokemon/507f1f77bcf86cd799439011
```

## Testing with Postman

1. Open Postman
2. Create a new collection called "Pokémon API"
3. Add the following requests:

#### POST - Create Pokémon
- URL: `http://localhost:3000/pokemon`
- Method: POST
- Body (raw JSON):
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

#### GET - Get all
- URL: `http://localhost:3000/pokemon`
- Method: GET

#### GET - Get by ID
- URL: `http://localhost:3000/pokemon/{{pokemon_id}}`
- Method: GET

#### PATCH - Update
- URL: `http://localhost:3000/pokemon/{{pokemon_id}}`
- Method: PATCH
- Body (raw JSON):
```json
{
  "hp": 80,
  "attack": 90
}
```

#### DELETE - Delete
- URL: `http://localhost:3000/pokemon/{{pokemon_id}}`
- Method: DELETE

## Sample Pokémon

Here are some Pokémon you can use for testing:

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

- `201 Created`: Pokémon created successfully
- `200 OK`: Successful operation (GET, PATCH, DELETE)
- `400 Bad Request`: Invalid or incomplete data
- `404 Not Found`: Pokémon not found
- `500 Internal Server Error`: Server error

## Verify MongoDB Connection

If you have MongoDB connection issues, verify:

1. The `MONGODB_URI` variable in your `.env` file
2. That MongoDB is running (if local)
3. That credentials are correct (if MongoDB Atlas)
4. That your IP is in the MongoDB Atlas whitelist (if cloud)

Check application logs for more details about the error.
