import { MediaRecord } from "../mediaRecord/MediaRecord";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  media?: Array<MediaRecord>;
  name: string;
  owner?: User;
  updatedAt: Date;
};
