import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  userId?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
