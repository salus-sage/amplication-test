import { SortOrder } from "../../util/SortOrder";

export type FragmentAnnotationOrderByInput = {
  createdAt?: SortOrder;
  creatorId?: SortOrder;
  id?: SortOrder;
  bodyPurpose?: SortOrder;
  selectorConformsTo?: SortOrder;
  selectorType?: SortOrder;
  selectorValue?: SortOrder;
  targetFormat?: SortOrder;
  targetId?: SortOrder;
  targetSrc?: SortOrder;
  updatedAt?: SortOrder;
};
