import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon API - Welcome</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            min-height: 100vh;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        .hero {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 3rem 2rem;
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        h1 {
            color: #fff;
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .subtitle {
            color: #e0e7ff;
            font-size: 1.3rem;
            margin-bottom: 2rem;
        }
        .description {
            color: #f8fafc;
            font-size: 1.1rem;
            max-width: 800px;
            margin: 0 auto 2rem;
            text-align: left;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 3rem;
        }
        .feature-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        .feature-card:hover {
            transform: translateY(-5px);
        }
        .feature-card h3 {
            color: #4f46e5;
            margin-bottom: 1rem;
        }
        .feature-card p {
            color: #64748b;
        }
        .docs-section {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            margin-bottom: 2rem;
        }
        .docs-section h2 {
            color: #fff;
            margin-bottom: 1.5rem;
        }
        .docs-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }
        .doc-link {
            display: inline-block;
            background: #4f46e5;
            color: white;
            padding: 1rem 2rem;
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
        }
        .doc-link:hover {
            background: #4338ca;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
        }
        .doc-link.secondary {
            background: #10b981;
        }
        .doc-link.secondary:hover {
            background: #059669;
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }
        .footer {
            text-align: center;
            color: #e0e7ff;
            margin-top: 3rem;
        }
        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }
            .docs-links {
                flex-direction: column;
                align-items: center;
            }
            .features {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>🎯 Pokémon API</h1>
            <p class="subtitle">A comprehensive REST API for managing Pokémon data</p>
            <p class="description">
                Welcome to the Pokémon API! This powerful REST API provides complete CRUD (Create, Read, Update, Delete)
                operations for managing Pokémon with detailed stats and properties. Built with NestJS and MongoDB,
                it offers a robust and scalable solution for Pokémon data management.
            </p>
        </div>

        <div class="features">
            <div class="feature-card">
                <h3>🔥 Full CRUD Operations</h3>
                <p>Create, read, update, and delete Pokémon with comprehensive stat management.</p>
            </div>
            <div class="feature-card">
                <h3>📊 Detailed Stats</h3>
                <p>Manage HP, Attack, Defense, Special Attack, Special Defense, and Speed stats.</p>
            </div>
            <div class="feature-card">
                <h3>🏷️ Type Classification</h3>
                <p>Organize Pokémon by their types (Electric, Fire, Water, etc.) with flexible categorization.</p>
            </div>
            <div class="feature-card">
                <h3>⚡ Real-time Updates</h3>
                <p>Automatic timestamp tracking for creation and modification dates.</p>
            </div>
            <div class="feature-card">
                <h3>🛡️ TypeScript Support</h3>
                <p>Built with TypeScript for type safety and excellent developer experience.</p>
            </div>
            <div class="feature-card">
                <h3>🚀 Production Ready</h3>
                <p>Optimized for production deployment with proper error handling and validation.</p>
            </div>
        </div>

        <div class="docs-section">
            <h2>📚 API Documentation</h2>
            <p>Explore the interactive API documentation to understand all available endpoints and test them directly.</p>
            <div class="docs-links">
                <a href="/api" class="doc-link">📋 Swagger UI Documentation</a>
                <a href="/docs" class="doc-link secondary">🎨 Scalar API Reference</a>
            </div>
        </div>

        <div class="footer">
            <p>🚀 Built with NestJS, MongoDB, and TypeScript | Ready for production deployment</p>
        </div>
    </div>
</body>
</html>`;
  }
}
