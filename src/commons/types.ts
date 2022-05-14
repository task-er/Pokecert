export const DEFAULT_POKEMON = {
  id: 0,
  no: 0,
  name: '',
  x: 0,
  y: 0,
}
export interface PokemonType {
  id: number
  no: number
  name: string
  x: number
  y: number
}

export interface PokemonsType {
  pokemons: PokemonType
}
