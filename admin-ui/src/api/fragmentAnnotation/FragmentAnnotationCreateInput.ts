export type FragmentAnnotationCreateInput = {
  bodyPurpose?: "Tagging" | "Commenting" | "Describing" | null;
  selectorType?:
    | "FragmentSelector"
    | "CssSelector"
    | "XPathSelector"
    | "TextQuoteSelector"
    | null;
  selectorValue?: string | null;
  targetFormat?: string | null;
  targetId?: string | null;
  targetSrc: string;
};
