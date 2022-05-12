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
