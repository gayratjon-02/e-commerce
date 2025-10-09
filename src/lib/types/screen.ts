/** REACT APP STATE **/

import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
}

/** HOMEPAGE **/
export interface HomePageState {
  flashSales: Product[];
  bestSellingProducts: Product[];
  newProducts: Product[];
  mixedProducts: Product[];
}

/** PROSUCTS PAGE **/
export interface ProductsPageState {
  seller: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}
/** ORDERS PAGE **/

export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
