import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FragmentAnnotationWhereInput = {
  creator?: UserWhereUniqueInput;
  id?: StringFilter;
  bodyPurpose?: "Tagging" | "Commenting" | "Describing";
  selectorConformsTo?: StringNullableFilter;
  selectorType?:
    | "FragmentSelector"
    | "CssSelector"
    | "XPathSelector"
    | "TextQuoteSelector";
  selectorValue?: StringNullableFilter;
  targetFormat?: StringNullableFilter;
  targetId?: StringNullableFilter;
  targetSrc?: StringFilter;
};
