# API Reference

Complete documentation for the Pokémon API.

## Overview

The Pokémon API is a RESTful service that provides full CRUD (Create, Read, Update, Delete) operations for managing Pokémon data. All responses are in JSON format.

## Base URL

```
http://localhost:3000
```

## API Documentation Endpoints

Once the application is running, access interactive documentation:

- **Swagger UI**: `http://localhost:3000/api`
- **Scalar Reference**: `http://localhost:3000/reference`

Both interfaces allow you to test endpoints directly in your browser.

## Quick Links

- **[Endpoints Documentation](./ENDPOINTS.md)** - Detailed endpoint specifications
- **[Code Examples](./EXAMPLES.md)** - Usage examples in various languages

## Authentication

Currently, the API does not require authentication. All endpoints are publicly accessible.

## Response Format

All responses are in JSON format.

### Success Response

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

### Error Response

```json
{
  "statusCode": 400,
  "message": "Invalid input data",
  "error": "Bad Request"
}
```

## HTTP Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| `200` | OK | Request successful |
| `201` | Created | Resource created successfully |
| `400` | Bad Request | Invalid request data |
| `404` | Not Found | Resource not found |
| `500` | Internal Server Error | Server error |

## Pokémon Model

### Properties

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `_id` | String | Auto | MongoDB unique identifier | `507f1f77bcf86cd799439011` |
| `name` | String | Yes | Pokémon name | `Pikachu` |
| `type` | String | Yes | Pokémon type | `Electric` |
| `hp` | Number | Yes | Hit points (health) | `35` |
| `attack` | Number | Yes | Attack power | `55` |
| `defense` | Number | Yes | Defense power | `40` |
| `spAtk` | Number | Yes | Special attack power | `50` |
| `spDef` | Number | Yes | Special defense power | `50` |
| `speed` | Number | Yes | Speed stat | `90` |
| `createdAt` | Date | Auto | Creation timestamp | `2025-10-28T23:30:00.000Z` |
| `updatedAt` | Date | Auto | Last update timestamp | `2025-10-28T23:30:00.000Z` |

### Validation Rules

- **name**: Required, string, 1-100 characters
- **type**: Required, string, 1-50 characters
- **hp**: Required, number, 1-255
- **attack**: Required, number, 1-255
- **defense**: Required, number, 1-255
- **spAtk**: Required, number, 1-255
- **spDef**: Required, number, 1-255
- **speed**: Required, number, 1-255

## Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/pokemon` | Create a new Pokémon |
| GET | `/pokemon` | Get all Pokémon |
| GET | `/pokemon/:id` | Get a specific Pokémon |
| PATCH | `/pokemon/:id` | Update a Pokémon |
| DELETE | `/pokemon/:id` | Delete a Pokémon |

For detailed endpoint documentation, see [ENDPOINTS.md](./ENDPOINTS.md)

## Rate Limiting

Currently, there is no rate limiting implemented. The API can handle requests as fast as your server can process them.

## CORS

CORS is enabled for all origins. You can make requests from any domain.

## Pagination

Pagination is not currently implemented. The GET `/pokemon` endpoint returns all Pokémon in the database.

## Filtering and Sorting

Filtering and sorting are not currently implemented. All Pokémon are returned in the order they were created.

## Next Steps

- Review [ENDPOINTS.md](./ENDPOINTS.md) for detailed endpoint specifications
- Check [EXAMPLES.md](./EXAMPLES.md) for code examples
- See [Testing Guide](../GUIDES/TESTING.md) for testing instructions
