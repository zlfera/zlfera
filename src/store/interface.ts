import { CategoryState } from "./modules/category/types";
import { category } from "./modules/category/index";
import { CartState } from "./modules/cart/types";
import { IUserModuleTypes } from "./modules/user/interface";
export type IRootState = {};
export type IAllStateTypes = IRootState & {
  user: IUserModuleTypes;
  cart: CartState;
  category: CategoryState;
};
