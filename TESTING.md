# Testing de la API Pokémon

## Pruebas con cURL

Asegúrate de que la aplicación esté corriendo en `http://localhost:3000`

### 1. Crear un Pokémon

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

Respuesta esperada:
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

### 2. Obtener todos los Pokémon

```bash
curl http://localhost:3000/pokemon
```

### 3. Obtener un Pokémon específico

```bash
curl http://localhost:3000/pokemon/507f1f77bcf86cd799439011
```

### 4. Actualizar un Pokémon

```bash
curl -X PATCH http://localhost:3000/pokemon/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "hp": 40,
    "attack": 60
  }'
```

### 5. Eliminar un Pokémon

```bash
curl -X DELETE http://localhost:3000/pokemon/507f1f77bcf86cd799439011
```

## Pruebas con Postman

1. Abre Postman
2. Crea una nueva colección llamada "Pokémon API"
3. Agrega las siguientes requests:

#### POST - Crear Pokémon
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

#### GET - Obtener todos
- URL: `http://localhost:3000/pokemon`
- Method: GET

#### GET - Obtener por ID
- URL: `http://localhost:3000/pokemon/{{pokemon_id}}`
- Method: GET

#### PATCH - Actualizar
- URL: `http://localhost:3000/pokemon/{{pokemon_id}}`
- Method: PATCH
- Body (raw JSON):
```json
{
  "hp": 80,
  "attack": 90
}
```

#### DELETE - Eliminar
- URL: `http://localhost:3000/pokemon/{{pokemon_id}}`
- Method: DELETE

## Pokémon de Ejemplo

Aquí hay algunos Pokémon que puedes usar para probar:

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

## Códigos de Respuesta HTTP

- `201 Created`: Pokémon creado exitosamente
- `200 OK`: Operación exitosa (GET, PATCH, DELETE)
- `400 Bad Request`: Datos inválidos o incompletos
- `404 Not Found`: Pokémon no encontrado
- `500 Internal Server Error`: Error del servidor

## Verificar la Conexión a MongoDB

Si tienes problemas de conexión a MongoDB, verifica:

1. La variable `MONGODB_URI` en tu archivo `.env`
2. Que MongoDB esté corriendo (si es local)
3. Que las credenciales sean correctas (si es MongoDB Atlas)
4. Que tu IP esté en la whitelist de MongoDB Atlas (si es cloud)

Revisa los logs de la aplicación para más detalles sobre el error.
