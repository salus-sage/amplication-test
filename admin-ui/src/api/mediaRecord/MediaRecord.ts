import { FragmentAnnotation } from "../fragmentAnnotation/FragmentAnnotation";
import { Label } from "../label/Label";
import { Project } from "../project/Project";
import { Tag } from "../tag/Tag";

export type MediaRecord = {
  createdAt: Date;
  description: string | null;
  filename: string | null;
  fragmentAnnotations?: Array<FragmentAnnotation>;
  id: string;
  labels?: Array<Label>;
  location: string | null;
  projects?: Array<Project>;
  tags?: Array<Tag>;
  type: string | null;
  updatedAt: Date;
  url: string;
};
