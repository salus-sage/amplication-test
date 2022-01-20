import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FragmentAnnotationWhereInput = {
  bodyPurpose?: "Tagging" | "Commenting" | "Describing";
  id?: StringFilter;
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
