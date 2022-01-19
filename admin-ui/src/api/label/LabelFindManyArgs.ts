import { LabelWhereInput } from "./LabelWhereInput";
import { LabelOrderByInput } from "./LabelOrderByInput";

export type LabelFindManyArgs = {
  where?: LabelWhereInput;
  orderBy?: LabelOrderByInput;
  skip?: number;
  take?: number;
};
