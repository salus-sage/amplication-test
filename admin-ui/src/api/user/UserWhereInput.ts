import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  fullName?: StringNullableFilter;
  id?: StringFilter;
  username?: StringFilter;
};
