export interface OrderRequest {
  orders: {
    menu_id: number;
    amount: number;
  }[];
  request: string;
  price: number;
  booth_id: number;
}
