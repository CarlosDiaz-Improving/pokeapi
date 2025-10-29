import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type PokemonDocument = HydratedDocument<Pokemon>;

@Schema()
export class Pokemon {
  @ApiProperty({
    description: 'The unique identifier of the Pokémon',
    example: '507f1f77bcf86cd799439011',
  })
  _id: string;

  @Prop({ required: true })
  @ApiProperty({
    description: 'The name of the Pokémon',
    example: 'Pikachu',
  })
  name: string;

  @Prop({ required: true })
  @ApiProperty({
    description: 'The type of the Pokémon',
    example: 'Electric',
  })
  type: string;

  @Prop({ required: true })
  @ApiProperty({
    description: 'Hit points (health)',
    example: 35,
    minimum: 1,
  })
  hp: number;

  @Prop({ required: true })
  @ApiProperty({
    description: 'Attack power',
    example: 55,
    minimum: 1,
  })
  attack: number;

  @Prop({ required: true })
  @ApiProperty({
    description: 'Defense power',
    example: 40,
    minimum: 1,
  })
  defense: number;

  @Prop({ required: true })
  @ApiProperty({
    description: 'Special attack power',
    example: 50,
    minimum: 1,
  })
  spAtk: number;

  @Prop({ required: true })
  @ApiProperty({
    description: 'Special defense power',
    example: 50,
    minimum: 1,
  })
  spDef: number;

  @Prop({ required: true })
  @ApiProperty({
    description: 'Speed stat',
    example: 90,
    minimum: 1,
  })
  speed: number;

  @Prop({ default: Date.now })
  @ApiProperty({
    description: 'Creation timestamp',
    example: '2025-10-28T23:30:00.000Z',
  })
  createdAt: Date;

  @Prop({ default: Date.now })
  @ApiProperty({
    description: 'Last update timestamp',
    example: '2025-10-28T23:30:00.000Z',
  })
  updatedAt: Date;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
