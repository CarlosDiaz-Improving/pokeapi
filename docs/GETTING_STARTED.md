# Getting Started

Complete guide to install, configure, and run the Pokémon API.

## Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn** package manager
- **MongoDB** (local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud)

## Installation

### Step 1: Clone and Install Dependencies

```bash
# Clone the repository (if not already done)
git clone <repository-url>
cd pokeapi

# Install dependencies
npm install
```

### Step 2: Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pokemon?retryWrites=true&w=majority
PORT=3000
```

#### MongoDB Connection Options

**Local MongoDB:**
```
MONGODB_URI=mongodb://localhost:27017/pokemon
```

**MongoDB Atlas (Cloud):**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pokemon?retryWrites=true&w=majority
```

### Step 3: Verify Installation

```bash
# Test if everything is installed correctly
npm run start:dev
```

You should see output similar to:
```
[Nest] 12345 - 10/29/2025, 2:45:00 AM     LOG [NestFactory] Starting Nest application...
[Nest] 12345 - 10/29/2025, 2:45:01 AM     LOG [InstanceLoader] AppModule dependencies initialized
[Nest] 12345 - 10/29/2025, 2:45:01 AM     LOG [RoutesResolver] PokemonController {/pokemon}:
[Nest] 12345 - 10/29/2025, 2:45:01 AM     LOG [RouterExplorer] Mapped {/pokemon, POST} route
[Nest] 12345 - 10/29/2025, 2:45:01 AM     LOG [RouterExplorer] Mapped {/pokemon, GET} route
[Nest] 12345 - 10/29/2025, 2:45:01 AM     LOG [RouterExplorer] Mapped {/pokemon/:id, GET} route
[Nest] 12345 - 10/29/2025, 2:45:01 AM     LOG [RouterExplorer] Mapped {/pokemon/:id, PATCH} route
[Nest] 12345 - 10/29/2025, 2:45:01 AM     LOG [RouterExplorer] Mapped {/pokemon/:id, DELETE} route
[Nest] 12345 - 10/29/2025, 2:45:01 AM     LOG [NestApplication] Nest application successfully started
Pokémon API running on http://localhost:3000
Swagger UI available at http://localhost:3000/api
Scalar Reference available at http://localhost:3000/reference
```

## Running the Application

### Development Mode (Recommended for Development)

Starts the application with hot-reload enabled:

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`

### Production Mode

Build and run the application for production:

```bash
# Build the application
npm run build

# Run the production build
npm run start:prod
```

### Watch Mode

Runs the application and watches for file changes:

```bash
npm run start
```

## Accessing the API

Once the application is running, you can access:

- **API Base URL**: `http://localhost:3000`
- **Swagger UI**: `http://localhost:3000/api`
- **Scalar Reference**: `http://localhost:3000/reference`
- **Pokémon Endpoints**: `http://localhost:3000/pokemon`

## Troubleshooting

### MongoDB Connection Issues

**Error: "connect ECONNREFUSED 127.0.0.1:27017"**

This means MongoDB is not running locally. Solutions:

1. **Start local MongoDB:**
   ```bash
   # macOS with Homebrew
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   
   # Windows
   net start MongoDB
   ```

2. **Use MongoDB Atlas instead:**
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster
   - Get your connection string
   - Update `MONGODB_URI` in `.env`

**Error: "authentication failed"**

- Verify your MongoDB username and password
- Check that your IP is whitelisted in MongoDB Atlas (if using cloud)
- Ensure the database name in the connection string is correct

### Port Already in Use

**Error: "listen EADDRINUSE :::3000"**

The port 3000 is already in use. Solutions:

```bash
# Use a different port
PORT=3001 npm run start:dev

# Or find and kill the process using port 3000
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Node Modules Issues

**Error: "Cannot find module"**

Reinstall dependencies:

```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Environment Variables Not Loading

**Error: "MONGODB_URI is undefined"**

1. Verify `.env` file exists in the root directory
2. Check that `MONGODB_URI` is set correctly
3. Restart the development server

## Next Steps

- Read the [API Reference](./API/README.md) to understand available endpoints
- Check [Testing Guide](./GUIDES/TESTING.md) to learn how to test the API
- Review [Project Structure](./ARCHITECTURE/PROJECT_STRUCTURE.md) to understand the codebase

## Environment Variables Reference

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `MONGODB_URI` | Yes | - | MongoDB connection string |
| `PORT` | No | 3000 | Server port |

## Quick Reference

```bash
# Install dependencies
npm install

# Start development server
npm run start:dev

# Build for production
npm run build

# Run production build
npm run start:prod

# Run tests
npm run test

# Run e2e tests
npm run test:e2e

# Check code coverage
npm run test:cov
```
