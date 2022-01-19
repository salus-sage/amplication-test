import { MediaRecord } from "../mediaRecord/MediaRecord";

export type Project = {
  createdAt: Date;
  id: string;
  media?: Array<MediaRecord>;
  name: string;
  updatedAt: Date;
};
