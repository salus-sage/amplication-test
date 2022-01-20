import { MediaRecord } from "../mediaRecord/MediaRecord";

export type Tag = {
  createdAt: Date;
  id: string;
  mediaRecords?: Array<MediaRecord>;
  updatedAt: Date;
  value: string | null;
};
