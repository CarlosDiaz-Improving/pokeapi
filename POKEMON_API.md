# Pokémon API - NestJS + MongoDB

Simple CRUD API for Pokémon using NestJS and MongoDB.

## Installation

Dependencies are already configured in `package.json`. You just need to install them:

```bash
npm install
```

## Configuration

1. Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

2. Update the `MONGODB_URI` variable with your MongoDB connection:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pokemon?retryWrites=true&w=majority
```

## Run the application

### Development
```bash
npm run start:dev
```

### Production
```bash
npm run build
npm run start:prod
```

## API Endpoints

### Base URL
```
http://localhost:3000/pokemon
```

### 1. Create a Pokémon (POST)
```bash
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

### 2. Get all Pokémon (GET)
```bash
GET /pokemon
```

### 3. Get a Pokémon by ID (GET)
```bash
GET /pokemon/:id
```

### 4. Update a Pokémon (PATCH)
```bash
PATCH /pokemon/:id
Content-Type: application/json

{
  "hp": 40,
  "attack": 60
}
```

### 5. Delete a Pokémon (DELETE)
```bash
DELETE /pokemon/:id
```

## Project Structure

```
src/
├── pokemon/
│   ├── dto/
│   │   ├── create-pokemon.dto.ts
│   │   └── update-pokemon.dto.ts
│   ├── pokemon.controller.ts
│   ├── pokemon.module.ts
│   ├── pokemon.schema.ts
│   └── pokemon.service.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

## Pokémon Properties

- `name` (string, required): Pokémon name
- `type` (string, required): Pokémon type (Electric, Fire, Water, etc.)
- `hp` (number, required): Hit points
- `attack` (number, required): Attack
- `defense` (number, required): Defense
- `spAtk` (number, required): Special attack
- `spDef` (number, required): Special defense
- `speed` (number, required): Speed
- `createdAt` (Date): Creation date (automatic)
- `updatedAt` (Date): Update date (automatic)

## Complete Pokémon Example

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Charizard",
  "type": "Fire/Flying",
  "hp": 78,
  "attack": 84,
  "defense": 78,
  "spAtk": 109,
  "spDef": 85,
  "speed": 100,
  "createdAt": "2025-10-28T23:30:00.000Z",
  "updatedAt": "2025-10-28T23:30:00.000Z"
}
```

## Deployment on Vercel

1. Make sure the `.env` file is in `.gitignore` (already configured)
2. Add environment variables in the Vercel panel:
   - `MONGODB_URI`: Your MongoDB connection
   - `PORT`: 3000 (optional, Vercel assigns it automatically)
3. Deploy normally with `git push`

## Notes

- The API uses Mongoose for MongoDB connection
- All Pokémon fields are required when creating
- Fields can be updated partially with PATCH
- `createdAt` and `updatedAt` dates are generated automatically
