import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Swagger/OpenAPI configuration
  const config = new DocumentBuilder()
    .setTitle('Pokémon API')
    .setDescription(
      'A comprehensive REST API for managing Pokémon data. ' +
        'This API provides full CRUD operations for Pokémon with detailed stats and properties. ' +
        'All endpoints support JSON request/response format.',
    )
    .setVersion('1.0.0')
    .setContact('API Support', 'https://github.com', 'support@pokeapi.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .addServer('http://localhost:3000', 'Development server')
    .addServer('https://pokeapi-seven-phi.vercel.app/', 'Production server')
    .addTag('Pokemon', 'All Pokémon management endpoints')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  const openApiDocument = documentFactory();

  // Serve Swagger UI static files in production (Vercel)
  const swaggerPath = join(process.cwd(), 'node_modules', 'swagger-ui-dist');
  app.useStaticAssets(swaggerPath, {
    prefix: '/api-docs/',
  });

  // Setup Swagger UI at /api
  SwaggerModule.setup('api', app, openApiDocument, {
    swaggerOptions: {
      persistAuthorization: true,
      displayOperationId: true,
      filter: true,
      showRequestHeaders: true,
    },
    customCss: `.swagger-ui .topbar { display: none }`,
    customSiteTitle: 'Pokémon API Documentation',
  });

  // Setup Scalar API Reference at /docs (dynamically imported for ESM compatibility)
  if (process.env.ENABLE_SCALAR_DOCS !== 'false') {
    try {
      const { apiReference } = await import('@scalar/nestjs-api-reference');
      const scalarReference = apiReference({
        content: openApiDocument,
        pageTitle: 'Pokémon API - Scalar Reference',
        metaData: {
          title: 'Pokémon API Documentation',
          description: 'Interactive API documentation for the Pokémon REST API',
        },
      });

      app.use('/docs', scalarReference);
    } catch (error) {
      console.warn('Scalar API Reference could not be initialized:', error);
    }
  }

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Pokémon API is running on http://localhost:${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/api`);
  console.log(`Scalar Reference available at http://localhost:${port}/docs`);
}
void bootstrap();
