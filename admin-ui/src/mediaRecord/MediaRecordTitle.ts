import { MediaRecord as TMediaRecord } from "../api/mediaRecord/MediaRecord";

export const MEDIARECORD_TITLE_FIELD = "filename";

export const MediaRecordTitle = (record: TMediaRecord): string => {
  return record.filename || record.id;
};
