import { Label } from "../label/Label";
import { Tag } from "../tag/Tag";

export type FragmentAnnotation = {
  bodyLabels?: Array<Label>;
  bodyTags?: Array<Tag>;
  createdAt: Date;
  id: string;
  targetFormat: string | null;
  targetId: string | null;
  targetSrc: string;
  updatedAt: Date;
};
