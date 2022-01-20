import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MediaRecordWhereInput = {
  description?: StringNullableFilter;
  filename?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  type?: StringNullableFilter;
  url?: StringFilter;
};
