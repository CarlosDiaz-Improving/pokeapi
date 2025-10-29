# Pokémon API - NestJS + MongoDB

API simple de CRUD para Pokémon usando NestJS y MongoDB.

## Instalación

Las dependencias ya están configuradas en `package.json`. Solo necesitas instalar:

```bash
npm install
```

## Configuración

1. Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Actualiza la variable `MONGODB_URI` con tu conexión a MongoDB:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pokemon?retryWrites=true&w=majority
```

## Ejecutar la aplicación

### Desarrollo
```bash
npm run start:dev
```

### Producción
```bash
npm run build
npm run start:prod
```

## Endpoints de la API

### Base URL
```
http://localhost:3000/pokemon
```

### 1. Crear un Pokémon (POST)
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

### 2. Obtener todos los Pokémon (GET)
```bash
GET /pokemon
```

### 3. Obtener un Pokémon por ID (GET)
```bash
GET /pokemon/:id
```

### 4. Actualizar un Pokémon (PATCH)
```bash
PATCH /pokemon/:id
Content-Type: application/json

{
  "hp": 40,
  "attack": 60
}
```

### 5. Eliminar un Pokémon (DELETE)
```bash
DELETE /pokemon/:id
```

## Estructura del Proyecto

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

## Propiedades del Pokémon

- `name` (string, requerido): Nombre del Pokémon
- `type` (string, requerido): Tipo de Pokémon (Electric, Fire, Water, etc.)
- `hp` (number, requerido): Puntos de vida
- `attack` (number, requerido): Ataque
- `defense` (number, requerido): Defensa
- `spAtk` (number, requerido): Ataque especial
- `spDef` (number, requerido): Defensa especial
- `speed` (number, requerido): Velocidad
- `createdAt` (Date): Fecha de creación (automática)
- `updatedAt` (Date): Fecha de actualización (automática)

## Ejemplo de Pokémon Completo

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

## Despliegue en Vercel

1. Asegúrate de que el archivo `.env` esté en `.gitignore` (ya está configurado)
2. Agrega las variables de entorno en el panel de Vercel:
   - `MONGODB_URI`: Tu conexión a MongoDB
   - `PORT`: 3000 (opcional, Vercel lo asigna automáticamente)
3. Despliega normalmente con `git push`

## Notas

- La API usa Mongoose para la conexión a MongoDB
- Todos los campos del Pokémon son requeridos al crear
- Los campos se pueden actualizar parcialmente con PATCH
- Las fechas `createdAt` y `updatedAt` se generan automáticamente
