import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  fetchDetailsInfo,
} from "../../store/pokemonDetailsSlice";

export const Search = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailsInfo({ limit: 0, offset: 0 }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};
