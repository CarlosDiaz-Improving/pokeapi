# API Usage Examples

Practical examples for using the Pokémon API in different languages and tools.

## Table of Contents

- [cURL](#curl)
- [JavaScript/Fetch](#javascriptfetch)
- [Python](#python)
- [Postman](#postman)

---

## cURL

### Create a Pokémon

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

### Get All Pokémon

```bash
curl http://localhost:3000/pokemon
```

### Get a Specific Pokémon

```bash
curl http://localhost:3000/pokemon/507f1f77bcf86cd799439011
```

### Update a Pokémon

```bash
curl -X PATCH http://localhost:3000/pokemon/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "hp": 40,
    "attack": 60
  }'
```

### Delete a Pokémon

```bash
curl -X DELETE http://localhost:3000/pokemon/507f1f77bcf86cd799439011
```

---

## JavaScript/Fetch

### Create a Pokémon

```javascript
const createPokemon = async () => {
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
  console.log('Created:', data);
  return data;
};

createPokemon();
```

### Get All Pokémon

```javascript
const getAllPokemon = async () => {
  const response = await fetch('http://localhost:3000/pokemon');
  const data = await response.json();
  console.log('All Pokémon:', data);
  return data;
};

getAllPokemon();
```

### Get a Specific Pokémon

```javascript
const getPokemonById = async (id) => {
  const response = await fetch(`http://localhost:3000/pokemon/${id}`);
  
  if (!response.ok) {
    throw new Error('Pokémon not found');
  }
  
  const data = await response.json();
  console.log('Pokémon:', data);
  return data;
};

getPokemonById('507f1f77bcf86cd799439011');
```

### Update a Pokémon

```javascript
const updatePokemon = async (id, updates) => {
  const response = await fetch(`http://localhost:3000/pokemon/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });

  const data = await response.json();
  console.log('Updated:', data);
  return data;
};

updatePokemon('507f1f77bcf86cd799439011', {
  hp: 40,
  attack: 60,
});
```

### Delete a Pokémon

```javascript
const deletePokemon = async (id) => {
  const response = await fetch(`http://localhost:3000/pokemon/${id}`, {
    method: 'DELETE',
  });

  const data = await response.json();
  console.log('Deleted:', data);
  return data;
};

deletePokemon('507f1f77bcf86cd799439011');
```

### Complete Example with Error Handling

```javascript
class PokemonAPI {
  constructor(baseURL = 'http://localhost:3000') {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'API request failed');
    }

    return response.json();
  }

  create(pokemon) {
    return this.request('/pokemon', {
      method: 'POST',
      body: JSON.stringify(pokemon),
    });
  }

  getAll() {
    return this.request('/pokemon');
  }

  getById(id) {
    return this.request(`/pokemon/${id}`);
  }

  update(id, updates) {
    return this.request(`/pokemon/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  delete(id) {
    return this.request(`/pokemon/${id}`, {
      method: 'DELETE',
    });
  }
}

// Usage
const api = new PokemonAPI();

(async () => {
  try {
    // Create
    const pikachu = await api.create({
      name: 'Pikachu',
      type: 'Electric',
      hp: 35,
      attack: 55,
      defense: 40,
      spAtk: 50,
      spDef: 50,
      speed: 90,
    });
    console.log('Created:', pikachu);

    // Get all
    const all = await api.getAll();
    console.log('All:', all);

    // Get by ID
    const one = await api.getById(pikachu._id);
    console.log('One:', one);

    // Update
    const updated = await api.update(pikachu._id, { hp: 40 });
    console.log('Updated:', updated);

    // Delete
    const deleted = await api.delete(pikachu._id);
    console.log('Deleted:', deleted);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

---

## Python

### Create a Pokémon

```python
import requests
import json

url = 'http://localhost:3000/pokemon'
pokemon = {
    'name': 'Pikachu',
    'type': 'Electric',
    'hp': 35,
    'attack': 55,
    'defense': 40,
    'spAtk': 50,
    'spDef': 50,
    'speed': 90
}

response = requests.post(url, json=pokemon)
print(response.json())
```

### Get All Pokémon

```python
import requests

url = 'http://localhost:3000/pokemon'
response = requests.get(url)
print(response.json())
```

### Get a Specific Pokémon

```python
import requests

pokemon_id = '507f1f77bcf86cd799439011'
url = f'http://localhost:3000/pokemon/{pokemon_id}'
response = requests.get(url)

if response.status_code == 200:
    print(response.json())
else:
    print('Pokémon not found')
```

### Update a Pokémon

```python
import requests

pokemon_id = '507f1f77bcf86cd799439011'
url = f'http://localhost:3000/pokemon/{pokemon_id}'
updates = {
    'hp': 40,
    'attack': 60
}

response = requests.patch(url, json=updates)
print(response.json())
```

### Delete a Pokémon

```python
import requests

pokemon_id = '507f1f77bcf86cd799439011'
url = f'http://localhost:3000/pokemon/{pokemon_id}'
response = requests.delete(url)
print(response.json())
```

### Complete Example with Class

```python
import requests

class PokemonAPI:
    def __init__(self, base_url='http://localhost:3000'):
        self.base_url = base_url

    def create(self, pokemon):
        response = requests.post(f'{self.base_url}/pokemon', json=pokemon)
        return response.json()

    def get_all(self):
        response = requests.get(f'{self.base_url}/pokemon')
        return response.json()

    def get_by_id(self, pokemon_id):
        response = requests.get(f'{self.base_url}/pokemon/{pokemon_id}')
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception('Pokémon not found')

    def update(self, pokemon_id, updates):
        response = requests.patch(f'{self.base_url}/pokemon/{pokemon_id}', json=updates)
        return response.json()

    def delete(self, pokemon_id):
        response = requests.delete(f'{self.base_url}/pokemon/{pokemon_id}')
        return response.json()

# Usage
api = PokemonAPI()

# Create
pikachu = api.create({
    'name': 'Pikachu',
    'type': 'Electric',
    'hp': 35,
    'attack': 55,
    'defense': 40,
    'spAtk': 50,
    'spDef': 50,
    'speed': 90
})
print('Created:', pikachu)

# Get all
all_pokemon = api.get_all()
print('All:', all_pokemon)

# Get by ID
one = api.get_by_id(pikachu['_id'])
print('One:', one)

# Update
updated = api.update(pikachu['_id'], {'hp': 40})
print('Updated:', updated)

# Delete
deleted = api.delete(pikachu['_id'])
print('Deleted:', deleted)
```

---

## Postman

### Setup

1. Open Postman
2. Create a new collection called "Pokémon API"
3. Create a new environment variable:
   - **Variable**: `base_url`
   - **Value**: `http://localhost:3000`

### Create Pokémon Request

- **Method**: POST
- **URL**: `{{base_url}}/pokemon`
- **Headers**: 
  - `Content-Type: application/json`
- **Body** (raw JSON):
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

### Get All Pokémon Request

- **Method**: GET
- **URL**: `{{base_url}}/pokemon`

### Get Pokémon by ID Request

- **Method**: GET
- **URL**: `{{base_url}}/pokemon/{{pokemon_id}}`

### Update Pokémon Request

- **Method**: PATCH
- **URL**: `{{base_url}}/pokemon/{{pokemon_id}}`
- **Headers**: 
  - `Content-Type: application/json`
- **Body** (raw JSON):
```json
{
  "hp": 40,
  "attack": 60
}
```

### Delete Pokémon Request

- **Method**: DELETE
- **URL**: `{{base_url}}/pokemon/{{pokemon_id}}`

### Postman Collection JSON

You can import this collection directly into Postman:

```json
{
  "info": {
    "name": "Pokémon API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Create Pokémon",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"name\": \"Pikachu\", \"type\": \"Electric\", \"hp\": 35, \"attack\": 55, \"defense\": 40, \"spAtk\": 50, \"spDef\": 50, \"speed\": 90}"
        },
        "url": {
          "raw": "{{base_url}}/pokemon",
          "host": ["{{base_url}}"],
          "path": ["pokemon"]
        }
      }
    },
    {
      "name": "Get All Pokémon",
      "request": {
        "method": "GET",
        "url": {
          "raw": "{{base_url}}/pokemon",
          "host": ["{{base_url}}"],
          "path": ["pokemon"]
        }
      }
    },
    {
      "name": "Get Pokémon by ID",
      "request": {
        "method": "GET",
        "url": {
          "raw": "{{base_url}}/pokemon/{{pokemon_id}}",
          "host": ["{{base_url}}"],
          "path": ["pokemon", "{{pokemon_id}}"]
        }
      }
    },
    {
      "name": "Update Pokémon",
      "request": {
        "method": "PATCH",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"hp\": 40, \"attack\": 60}"
        },
        "url": {
          "raw": "{{base_url}}/pokemon/{{pokemon_id}}",
          "host": ["{{base_url}}"],
          "path": ["pokemon", "{{pokemon_id}}"]
        }
      }
    },
    {
      "name": "Delete Pokémon",
      "request": {
        "method": "DELETE",
        "url": {
          "raw": "{{base_url}}/pokemon/{{pokemon_id}}",
          "host": ["{{base_url}}"],
          "path": ["pokemon", "{{pokemon_id}}"]
        }
      }
    }
  ]
}
```

---

## Sample Pokémon Data

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

---

## Next Steps

- See [ENDPOINTS.md](./ENDPOINTS.md) for detailed endpoint specifications
- Check [Testing Guide](../GUIDES/TESTING.md) for more testing instructions
