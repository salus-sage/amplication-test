import { Tag as TTag } from "../api/tag/Tag";

export const TAG_TITLE_FIELD = "value";

export const TagTitle = (record: TTag): string => {
  return record.value || record.id;
};
