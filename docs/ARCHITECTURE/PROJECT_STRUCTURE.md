# Project Structure

Understanding the Pokémon API codebase organization and architecture.

## Directory Overview

```
pokeapi/
├── docs/                          # Documentation (this folder)
│   ├── README.md                  # Documentation index
│   ├── GETTING_STARTED.md         # Installation & setup
│   ├── API/                       # API documentation
│   │   ├── README.md              # API overview
│   │   ├── ENDPOINTS.md           # Endpoint specifications
│   │   └── EXAMPLES.md            # Code examples
│   ├── GUIDES/                    # Implementation guides
│   │   ├── TESTING.md             # Testing instructions
│   │   └── DEPLOYMENT.md          # Deployment guide
│   └── ARCHITECTURE/              # Architecture documentation
│       └── PROJECT_STRUCTURE.md   # This file
├── src/                           # Source code
│   ├── pokemon/                   # Pokemon module
│   │   ├── dto/                   # Data Transfer Objects
│   │   │   ├── create-pokemon.dto.ts
│   │   │   └── update-pokemon.dto.ts
│   │   ├── pokemon.controller.ts  # HTTP request handlers
│   │   ├── pokemon.module.ts      # Module definition
│   │   ├── pokemon.schema.ts      # MongoDB schema
│   │   └── pokemon.service.ts     # Business logic
│   ├── app.controller.ts          # Root controller
│   ├── app.module.ts              # Root module
│   ├── app.service.ts             # Root service
│   └── main.ts                    # Application entry point
├── test/                          # Test files
│   ├── app.e2e-spec.ts            # E2E tests
│   └── jest-e2e.json              # E2E test configuration
├── dist/                          # Compiled output (generated)
├── node_modules/                  # Dependencies (generated)
├── .env                           # Environment variables (local)
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules
├── .http                          # HTTP requests for testing
├── .prettierrc                    # Code formatting rules
├── eslint.config.mjs              # ESLint configuration
├── nest-cli.json                  # NestJS CLI configuration
├── package.json                   # Project dependencies
├── package-lock.json              # Dependency lock file
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.build.json            # TypeScript build configuration
└── README.md                      # Project README
```

---

## Source Code Structure

### Entry Point: `src/main.ts`

The application entry point that:
- Creates the NestJS application
- Sets up Swagger documentation
- Sets up Scalar API reference
- Starts the server on the configured port

```typescript
// Example structure
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Setup documentation
  // Start server
}
bootstrap();
```

### Root Module: `src/app.module.ts`

The root module that:
- Imports all feature modules
- Configures MongoDB connection
- Sets up global middleware

**Imports**:
- `MongooseModule` - MongoDB integration
- `PokemonModule` - Pokemon feature module

### Root Controller: `src/app.controller.ts`

Handles root-level routes (e.g., health checks).

### Root Service: `src/app.service.ts`

Provides root-level services.

---

## Pokemon Module

The Pokemon module is organized following NestJS best practices:

### Module Structure

```
pokemon/
├── dto/
│   ├── create-pokemon.dto.ts      # DTO for creating Pokemon
│   └── update-pokemon.dto.ts      # DTO for updating Pokemon
├── pokemon.controller.ts           # HTTP handlers
├── pokemon.module.ts               # Module definition
├── pokemon.schema.ts               # MongoDB schema
└── pokemon.service.ts              # Business logic
```

### Data Transfer Objects (DTOs)

**`create-pokemon.dto.ts`**
- Defines the shape of data for creating a Pokemon
- Includes validation rules
- Used for request validation

**`update-pokemon.dto.ts`**
- Defines the shape of data for updating a Pokemon
- All fields are optional
- Used for PATCH request validation

### Schema: `pokemon.schema.ts`

Defines the MongoDB schema for Pokemon:
- Field definitions
- Validation rules
- Indexes for performance
- Timestamps (createdAt, updatedAt)

### Service: `pokemon.service.ts`

Contains business logic:
- `create(createPokemonDto)` - Create a new Pokemon
- `findAll()` - Get all Pokemon
- `findOne(id)` - Get a specific Pokemon
- `update(id, updatePokemonDto)` - Update a Pokemon
- `remove(id)` - Delete a Pokemon

### Controller: `pokemon.controller.ts`

Handles HTTP requests:
- `POST /pokemon` - Create
- `GET /pokemon` - Get all
- `GET /pokemon/:id` - Get one
- `PATCH /pokemon/:id` - Update
- `DELETE /pokemon/:id` - Delete

---

## Data Flow

### Request Flow

```
HTTP Request
    ↓
Controller (validates & routes)
    ↓
Service (business logic)
    ↓
MongoDB (data persistence)
    ↓
Service (returns result)
    ↓
Controller (formats response)
    ↓
HTTP Response
```

### Example: Create Pokemon

1. **HTTP Request** arrives at `POST /pokemon`
2. **Controller** receives request and validates using `CreatePokemonDto`
3. **Service** receives validated data
4. **MongoDB** stores the document
5. **Service** returns the created document
6. **Controller** formats and returns the response

---

## Key Files Explained

### `package.json`

Defines:
- Project metadata
- Dependencies
- Scripts (start, build, test, etc.)
- Development dependencies

**Key Scripts**:
```json
{
  "start": "nest start",
  "start:dev": "nest start --watch",
  "start:prod": "node dist/main",
  "build": "nest build",
  "test": "jest",
  "test:e2e": "jest --config ./test/jest-e2e.json"
}
```

### `tsconfig.json`

TypeScript configuration:
- Compiler options
- Target version
- Module system
- Path aliases

### `.env.example`

Template for environment variables:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pokemon
PORT=3000
```

### `.http`

HTTP requests for manual testing (VS Code REST Client extension):
```http
### Create Pokemon
POST http://localhost:3000/pokemon
Content-Type: application/json

{
  "name": "Pikachu",
  ...
}
```

---

## Module Dependencies

```
AppModule
├── MongooseModule (MongoDB)
└── PokemonModule
    ├── PokemonController
    ├── PokemonService
    └── MongooseModule (Pokemon schema)
```

---

## Dependency Injection

NestJS uses dependency injection for:
- Services injected into controllers
- Repositories injected into services
- Configuration injected throughout

**Example**:
```typescript
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}
}
```

---

## Database Schema

### Pokemon Collection

```javascript
{
  _id: ObjectId,
  name: String,
  type: String,
  hp: Number,
  attack: Number,
  defense: Number,
  spAtk: Number,
  spDef: Number,
  speed: Number,
  createdAt: Date,
  updatedAt: Date,
  __v: Number
}
```

### Indexes

- `_id` - Primary key (auto-indexed)
- `name` - For searching by name
- `type` - For filtering by type

---

## Error Handling

### Global Exception Filter

Catches all exceptions and formats them consistently:
```json
{
  "statusCode": 400,
  "message": "Error message",
  "error": "Bad Request"
}
```

### HTTP Exceptions

- `BadRequestException` - 400
- `NotFoundException` - 404
- `InternalServerErrorException` - 500

---

## Validation

### Input Validation

Uses `class-validator` decorators in DTOs:
```typescript
export class CreatePokemonDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsNumber()
  @Min(1)
  @Max(255)
  hp: number;
}
```

### Validation Pipe

Automatically validates requests against DTOs.

---

## Testing Structure

### Unit Tests

Located in `src/` alongside source files:
```
src/
├── pokemon/
│   ├── pokemon.service.spec.ts
│   └── pokemon.controller.spec.ts
```

### E2E Tests

Located in `test/`:
```
test/
├── app.e2e-spec.ts
└── jest-e2e.json
```

---

## Build Process

### Development Build

```bash
npm run start:dev
```

- Watches for file changes
- Hot-reloads on save
- Includes source maps for debugging

### Production Build

```bash
npm run build
```

1. Compiles TypeScript to JavaScript
2. Outputs to `dist/` folder
3. Minifies code
4. Removes dev dependencies

### Running Production Build

```bash
npm run start:prod
```

Runs the compiled JavaScript from `dist/`.

---

## Configuration

### NestJS Configuration

`nest-cli.json`:
- Project structure
- Build options
- Code generation settings

### TypeScript Configuration

`tsconfig.json`:
- Compilation target
- Module system
- Path aliases

### ESLint Configuration

`eslint.config.mjs`:
- Code style rules
- Best practices
- Error detection

---

## Environment Variables

### Local Development

Create `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/pokemon
PORT=3000
```

### Production

Set in Vercel dashboard or deployment platform.

---

## Performance Considerations

### Database Optimization

- Indexes on frequently queried fields
- Connection pooling via Mongoose
- Lean queries for read-only operations

### API Optimization

- Response compression
- Caching headers
- Efficient serialization

### Code Optimization

- Tree-shaking in production build
- Code splitting
- Lazy loading of modules

---

## Security Considerations

### Input Validation

- All inputs validated against DTOs
- Type checking at compile time
- Runtime validation with class-validator

### Error Handling

- No sensitive information in error messages
- Consistent error response format
- Proper HTTP status codes

### Environment Variables

- Sensitive data in `.env` (not committed)
- Different configs for dev/prod
- Secrets management in deployment

---

## Future Enhancements

### Potential Improvements

1. **Authentication** - Add JWT-based auth
2. **Authorization** - Role-based access control
3. **Pagination** - Limit and offset for large datasets
4. **Filtering** - Filter by type, stats, etc.
5. **Sorting** - Sort by name, stats, etc.
6. **Caching** - Redis for frequently accessed data
7. **Rate Limiting** - Prevent abuse
8. **Logging** - Structured logging
9. **Monitoring** - Application performance monitoring
10. **Testing** - Increase test coverage

---

## Related Documentation

- [Getting Started](../GETTING_STARTED.md) - Installation & setup
- [API Reference](../API/README.md) - API documentation
- [Testing Guide](../GUIDES/TESTING.md) - Testing instructions
- [Deployment Guide](../GUIDES/DEPLOYMENT.md) - Deployment instructions
