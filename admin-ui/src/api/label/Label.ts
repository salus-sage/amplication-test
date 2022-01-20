import { FragmentAnnotation } from "../fragmentAnnotation/FragmentAnnotation";
import { MediaRecord } from "../mediaRecord/MediaRecord";

export type Label = {
  createdAt: Date;
  fragmentAnnotations?: Array<FragmentAnnotation>;
  id: string;
  labelName: string;
  mediaRecords?: Array<MediaRecord>;
  updatedAt: Date;
};
