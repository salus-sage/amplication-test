import { SortOrder } from "../../util/SortOrder";

export type MediaRecordOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  filename?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
