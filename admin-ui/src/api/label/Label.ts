import { MediaRecord } from "../mediaRecord/MediaRecord";

export type Label = {
  createdAt: Date;
  id: string;
  labelName: string;
  mediaRecords?: Array<MediaRecord>;
  updatedAt: Date;
};
