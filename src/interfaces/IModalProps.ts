import { IPokemonDetails } from "./IPokemonDetails";

export interface IModalProps {
  isShow: boolean;
  handleClose: () => void;
  pokemonName: string;
}
