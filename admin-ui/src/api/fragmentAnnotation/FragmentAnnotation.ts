import { User } from "../user/User";
import { Label } from "../label/Label";
import { MediaRecord } from "../mediaRecord/MediaRecord";
import { Tag } from "../tag/Tag";

export type FragmentAnnotation = {
  createdAt: Date;
  creator?: User | null;
  id: string;
  bodyLabels?: Array<Label>;
  mediaRecord?: Array<MediaRecord>;
  bodyPurpose?: "Tagging" | "Commenting" | "Describing" | null;
  selectorConformsTo: string | null;
  selectorType?:
    | "FragmentSelector"
    | "CssSelector"
    | "XPathSelector"
    | "TextQuoteSelector"
    | null;
  selectorValue: string | null;
  bodyTags?: Array<Tag>;
  targetFormat: string | null;
  targetId: string | null;
  targetSrc: string;
  updatedAt: Date;
};
