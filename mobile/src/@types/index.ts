export interface ApiResponse {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface Product extends ApiResponse {
  amount: number;
  subtotal: number;
  formattedPrice: string;
  formattedSubtotal: string;
}

export interface Cart {
  products: Product[];
  total: number;
  formattedTotal: string;
}

export interface ReduxState {
  cart: Cart;
}
