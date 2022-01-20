import { FragmentAnnotation } from "../fragmentAnnotation/FragmentAnnotation";
import { MediaRecord } from "../mediaRecord/MediaRecord";

export type Tag = {
  createdAt: Date;
  fragmentAnnotations?: Array<FragmentAnnotation>;
  id: string;
  mediaRecords?: Array<MediaRecord>;
  updatedAt: Date;
  value: string | null;
};
