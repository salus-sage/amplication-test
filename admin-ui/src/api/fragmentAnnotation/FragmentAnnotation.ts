import { Label } from "../label/Label";
import { Tag } from "../tag/Tag";

export type FragmentAnnotation = {
  bodyLabels?: Array<Label>;
  bodyPurpose?: "Tagging" | "Commenting" | "Describing" | null;
  bodyTags?: Array<Tag>;
  createdAt: Date;
  id: string;
  selectorType?:
    | "FragmentSelector"
    | "CssSelector"
    | "XPathSelector"
    | "TextQuoteSelector"
    | null;
  selectorValue: string | null;
  targetFormat: string | null;
  targetId: string | null;
  targetSrc: string;
  updatedAt: Date;
};
