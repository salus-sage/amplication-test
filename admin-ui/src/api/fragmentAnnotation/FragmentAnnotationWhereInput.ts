import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FragmentAnnotationWhereInput = {
  bodyPurpose?: "Tagging" | "Commenting";
  id?: StringFilter;
  targetFormat?: StringNullableFilter;
  targetId?: StringNullableFilter;
  targetSrc?: StringFilter;
};
