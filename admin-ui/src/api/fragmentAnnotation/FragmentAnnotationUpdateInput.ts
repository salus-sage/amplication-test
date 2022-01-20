import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FragmentAnnotationUpdateInput = {
  creator?: UserWhereUniqueInput | null;
  bodyPurpose?: "Tagging" | "Commenting" | "Describing" | null;
  selectorConformsTo?: string | null;
  selectorType?:
    | "FragmentSelector"
    | "CssSelector"
    | "XPathSelector"
    | "TextQuoteSelector"
    | null;
  selectorValue?: string | null;
  targetFormat?: string | null;
  targetId?: string | null;
  targetSrc?: string;
};
