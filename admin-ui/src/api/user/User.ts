import { Project } from "../project/Project";
import { FragmentAnnotation } from "../fragmentAnnotation/FragmentAnnotation";

export type User = {
  contributor?: Array<Project>;
  createdAt: Date;
  fragmentAnnotations?: Array<FragmentAnnotation>;
  fullName: string | null;
  id: string;
  projects?: Array<Project>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
