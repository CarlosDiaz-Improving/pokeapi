import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { apiReference } from '@scalar/nestjs-api-reference';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
    .addServer('https://backend-test-lake-beta.vercel.app', 'Production server')
    .addTag('Pokemon', 'All Pokémon management endpoints')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  // Setup Swagger UI at /api
  SwaggerModule.setup('api', app, documentFactory, {
    swaggerOptions: {
      persistAuthorization: true,
      displayOperationId: true,
      filter: true,
      showRequestHeaders: true,
      presets: [
        {
          name: 'preset_name',
          components: {},
        },
      ],
    },
    customCss: `.swagger-ui .topbar { display: none }`,
    customSiteTitle: 'Pokémon API Documentation',
  });

  // Setup Scalar API Reference at /docs
  app.use(
    '/docs',
    apiReference({
      content: documentFactory(),
      pageTitle: 'Pokémon API - Scalar Reference',
      metaData: {
        title: 'Pokémon API Documentation',
        description: 'Interactive API documentation for the Pokémon REST API',
      },
    }),
  );

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Pokémon API is running on http://localhost:${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/api`);
  console.log(`Scalar Reference available at http://localhost:${port}/docs`);
}
void bootstrap();
