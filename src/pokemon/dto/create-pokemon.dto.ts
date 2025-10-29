import { ApiProperty } from '@nestjs/swagger';

export class CreatePokemonDto {
  @ApiProperty({
    description: 'The name of the Pokémon',
    example: 'Pikachu',
  })
  name: string;

  @ApiProperty({
    description: 'The type of the Pokémon (e.g., Electric, Fire, Water)',
    example: 'Electric',
  })
  type: string;

  @ApiProperty({
    description: 'Hit points (health)',
    example: 35,
    minimum: 1,
  })
  hp: number;

  @ApiProperty({
    description: 'Attack power',
    example: 55,
    minimum: 1,
  })
  attack: number;

  @ApiProperty({
    description: 'Defense power',
    example: 40,
    minimum: 1,
  })
  defense: number;

  @ApiProperty({
    description: 'Special attack power',
    example: 50,
    minimum: 1,
  })
  spAtk: number;

  @ApiProperty({
    description: 'Special defense power',
    example: 50,
    minimum: 1,
  })
  spDef: number;

  @ApiProperty({
    description: 'Speed stat',
    example: 90,
    minimum: 1,
  })
  speed: number;
}
