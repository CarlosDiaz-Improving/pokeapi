import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {
  @ApiProperty({
    description: 'The name of the Pokémon',
    example: 'Pikachu',
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'The type of the Pokémon',
    example: 'Electric',
    required: false,
  })
  type?: string;

  @ApiProperty({
    description: 'Hit points (health)',
    example: 35,
    minimum: 1,
    required: false,
  })
  hp?: number;

  @ApiProperty({
    description: 'Attack power',
    example: 55,
    minimum: 1,
    required: false,
  })
  attack?: number;

  @ApiProperty({
    description: 'Defense power',
    example: 40,
    minimum: 1,
    required: false,
  })
  defense?: number;

  @ApiProperty({
    description: 'Special attack power',
    example: 50,
    minimum: 1,
    required: false,
  })
  spAtk?: number;

  @ApiProperty({
    description: 'Special defense power',
    example: 50,
    minimum: 1,
    required: false,
  })
  spDef?: number;

  @ApiProperty({
    description: 'Speed stat',
    example: 90,
    minimum: 1,
    required: false,
  })
  speed?: number;
}
