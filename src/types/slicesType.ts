export type GenericFetchType = {
  status: "loading" | "idle";
  error: string | null;
};

export type FetchInfoError = {
  message: string;
};

export type ResponseType = {
  data: any;
};

export type IPokemon = {
  limit?: number;
  offset?: number;
};
