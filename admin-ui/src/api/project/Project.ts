import { User } from "../user/User";
import { MediaRecord } from "../mediaRecord/MediaRecord";

export type Project = {
  collaborators?: Array<User>;
  createdAt: Date;
  id: string;
  media?: Array<MediaRecord>;
  name: string;
  owner?: User;
  updatedAt: Date;
};
