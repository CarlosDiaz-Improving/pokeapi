# Pokémon API

A comprehensive REST API for managing Pokémon data built with **NestJS** and **MongoDB**. The API provides full CRUD (Create, Read, Update, Delete) operations with interactive API documentation.

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation & Running

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your MongoDB URI

# Start development server
npm run start:dev
```

The API will be available at `http://localhost:3000`

## 📚 Documentation

Complete documentation is organized in the `docs/` folder:

| Document | Purpose |
|----------|---------|
| **[docs/README.md](./docs/README.md)** | Documentation index and overview |
| **[docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md)** | Installation, configuration, and setup |
| **[docs/API/README.md](./docs/API/README.md)** | API overview and reference |
| **[docs/API/ENDPOINTS.md](./docs/API/ENDPOINTS.md)** | Detailed endpoint specifications |
| **[docs/API/EXAMPLES.md](./docs/API/EXAMPLES.md)** | Code examples (cURL, JavaScript, Python, Postman) |
| **[docs/GUIDES/TESTING.md](./docs/GUIDES/TESTING.md)** | Testing instructions and examples |
| **[docs/GUIDES/DEPLOYMENT.md](./docs/GUIDES/DEPLOYMENT.md)** | Deployment to production (Vercel) |
| **[docs/ARCHITECTURE/PROJECT_STRUCTURE.md](./docs/ARCHITECTURE/PROJECT_STRUCTURE.md)** | Project structure and architecture |

## 🎯 Quick Links

- **API Documentation**: [Swagger UI](http://localhost:3000/api) | [Scalar Reference](http://localhost:3000/reference)
- **Base URL**: `http://localhost:3000/pokemon`

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/pokemon` | Create a new Pokémon |
| GET | `/pokemon` | Get all Pokémon |
| GET | `/pokemon/:id` | Get a specific Pokémon |
| PATCH | `/pokemon/:id` | Update a Pokémon |
| DELETE | `/pokemon/:id` | Delete a Pokémon |

See [docs/API/ENDPOINTS.md](./docs/API/ENDPOINTS.md) for detailed specifications.

## 💻 Quick Example

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

See [docs/API/EXAMPLES.md](./docs/API/EXAMPLES.md) for more examples in JavaScript, Python, and Postman.

## 🏗️ Project Structure

```
pokeapi/
├── docs/                    # Complete documentation
│   ├── README.md
│   ├── GETTING_STARTED.md
│   ├── API/
│   ├── GUIDES/
│   └── ARCHITECTURE/
├── src/                     # Source code
│   ├── pokemon/            # Pokemon module
│   ├── app.module.ts
│   └── main.ts
├── test/                   # Tests
├── .env.example            # Environment template
├── package.json
└── README.md              # This file
```

See [docs/ARCHITECTURE/PROJECT_STRUCTURE.md](./docs/ARCHITECTURE/PROJECT_STRUCTURE.md) for detailed structure explanation.

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

See [docs/GUIDES/TESTING.md](./docs/GUIDES/TESTING.md) for detailed testing instructions.

## 🚢 Deployment

```bash
# Build for production
npm run build

# Run production build
npm run start:prod
```

See [docs/GUIDES/DEPLOYMENT.md](./docs/GUIDES/DEPLOYMENT.md) for Vercel deployment instructions.

## 📊 Pokémon Model

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `_id` | String | Auto | MongoDB unique identifier |
| `name` | String | Yes | Pokémon name |
| `type` | String | Yes | Pokémon type |
| `hp` | Number | Yes | Hit points |
| `attack` | Number | Yes | Attack power |
| `defense` | Number | Yes | Defense power |
| `spAtk` | Number | Yes | Special attack |
| `spDef` | Number | Yes | Special defense |
| `speed` | Number | Yes | Speed stat |
| `createdAt` | Date | Auto | Creation timestamp |
| `updatedAt` | Date | Auto | Update timestamp |

## ⚙️ Available Commands

```bash
npm run start          # Start application
npm run start:dev      # Start with hot-reload
npm run start:prod     # Start production build
npm run build          # Build for production
npm run test           # Run unit tests
npm run test:e2e       # Run E2E tests
npm run test:cov       # Run tests with coverage
```

## 🆘 Troubleshooting

- **MongoDB Connection Issues**: See [docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md#troubleshooting)
- **Port Already in Use**: See [docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md#port-already-in-use)
- **Testing Issues**: See [docs/GUIDES/TESTING.md](./docs/GUIDES/TESTING.md#troubleshooting)
- **Deployment Issues**: See [docs/GUIDES/DEPLOYMENT.md](./docs/GUIDES/DEPLOYMENT.md#troubleshooting)

## 📖 Learn More

- [NestJS Documentation](https://docs.nestjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

MIT License - See LICENSE file for details
