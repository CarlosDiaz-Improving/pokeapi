# Documentation

Welcome to the Pokémon API documentation. This folder contains comprehensive guides for understanding and working with the API.

## Quick Navigation

- **[Getting Started](./GETTING_STARTED.md)** - Installation, configuration, and running the application
- **[API Reference](./API/README.md)** - Complete API documentation and endpoints
- **[Testing Guide](./GUIDES/TESTING.md)** - How to test the API with cURL and Postman
- **[Deployment Guide](./GUIDES/DEPLOYMENT.md)** - Deploying to production
- **[Project Structure](./ARCHITECTURE/PROJECT_STRUCTURE.md)** - Understanding the codebase

## Overview

The Pokémon API is a RESTful service built with NestJS and MongoDB that provides full CRUD operations for managing Pokémon data. It includes:

- Interactive API documentation (Swagger UI & Scalar)
- MongoDB integration with Mongoose
- Data validation and error handling
- Production-ready configuration

## Key Features

- **RESTful Design** - Standard HTTP methods for all operations
- **MongoDB Integration** - Persistent data storage with Mongoose
- **Interactive Docs** - Swagger UI and Scalar API Reference
- **Error Handling** - Comprehensive error responses
- **Validation** - Data validation on all inputs

## Getting Help

1. Check the relevant guide in the documentation folder
2. Review the API examples in [API/EXAMPLES.md](./API/EXAMPLES.md)
3. Check the troubleshooting section in [GETTING_STARTED.md](./GETTING_STARTED.md)

## Documentation Structure

```
docs/
├── README.md                          # This file
├── GETTING_STARTED.md                 # Installation & setup
├── API/
│   ├── README.md                      # API overview
│   ├── ENDPOINTS.md                   # Detailed endpoint documentation
│   └── EXAMPLES.md                    # Code examples
├── GUIDES/
│   ├── TESTING.md                     # Testing instructions
│   └── DEPLOYMENT.md                  # Deployment guide
└── ARCHITECTURE/
    └── PROJECT_STRUCTURE.md           # Project structure explanation
```

## License

MIT License - See LICENSE file in the root directory for details
