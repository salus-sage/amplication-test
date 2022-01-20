export type FragmentAnnotationCreateInput = {
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
  targetSrc: string;
};
