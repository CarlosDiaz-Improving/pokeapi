import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './pokemon.schema';

@ApiTags('Pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new Pokémon',
    description: 'Creates a new Pokémon with all required stats and properties',
  })
  @ApiBody({
    type: CreatePokemonDto,
    description: 'Pokémon data to create',
  })
  @ApiResponse({
    status: 201,
    description: 'Pokémon successfully created',
    type: Pokemon,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all Pokémon',
    description: 'Retrieves a list of all Pokémon in the database',
  })
  @ApiResponse({
    status: 200,
    description: 'List of all Pokémon',
    type: [Pokemon],
  })
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a Pokémon by ID',
    description: 'Retrieves a specific Pokémon by its MongoDB ID',
  })
  @ApiParam({
    name: 'id',
    description: 'The MongoDB ID of the Pokémon',
    example: '507f1f77bcf86cd799439011',
  })
  @ApiResponse({
    status: 200,
    description: 'Pokémon found',
    type: Pokemon,
  })
  @ApiResponse({
    status: 404,
    description: 'Pokémon not found',
  })
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a Pokémon',
    description: 'Updates one or more properties of an existing Pokémon',
  })
  @ApiParam({
    name: 'id',
    description: 'The MongoDB ID of the Pokémon to update',
    example: '507f1f77bcf86cd799439011',
  })
  @ApiBody({
    type: UpdatePokemonDto,
    description: 'Pokémon data to update (all fields optional)',
  })
  @ApiResponse({
    status: 200,
    description: 'Pokémon successfully updated',
    type: Pokemon,
  })
  @ApiResponse({
    status: 404,
    description: 'Pokémon not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a Pokémon',
    description: 'Permanently deletes a Pokémon from the database',
  })
  @ApiParam({
    name: 'id',
    description: 'The MongoDB ID of the Pokémon to delete',
    example: '507f1f77bcf86cd799439011',
  })
  @ApiResponse({
    status: 200,
    description: 'Pokémon successfully deleted',
    type: Pokemon,
  })
  @ApiResponse({
    status: 404,
    description: 'Pokémon not found',
  })
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(id);
  }
}
