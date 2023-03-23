export interface IPokemonMain {
  count: number;
  next: string;
  previous: any;
  results: IPokemonName[];
}

export interface IPokemonName {
  name: string;
  infoUrl: string;
}
