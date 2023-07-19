export type UserReducer = {
  email: string,
  password: string,
};
export type RootReducer = {
  user: UserReducer,
  wallet: WalletReducer,
};
export type WalletReducer = {
  total: number,
};
