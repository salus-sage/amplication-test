import { FragmentAnnotation } from "../fragmentAnnotation/FragmentAnnotation";
import { Project } from "../project/Project";

export type User = {
  contributor?: Array<User>;
  createdAt: Date;
  fragmentAnnotations?: Array<FragmentAnnotation>;
  fullName: string | null;
  id: string;
  user?: User | null;
  projects?: Array<Project>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
