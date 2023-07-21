export type UserReducer = {
  email: string,
  password: string,
};
export type RootReducer = {
  user: UserReducer,
  wallet: WalletReducer,
  // ask:string,
  // id: string,
  // exchangeRates: string,
};
export type WalletReducer = {
  total: number,
  currencies: [],
  expenses: [],
};
