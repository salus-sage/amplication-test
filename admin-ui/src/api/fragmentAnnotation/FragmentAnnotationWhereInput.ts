import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FragmentAnnotationWhereInput = {
  id?: StringFilter;
  targetFormat?: StringNullableFilter;
  targetId?: StringNullableFilter;
};
