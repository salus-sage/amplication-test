import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

export type UserWhereInput = {
  fullName?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  username?: StringFilter;
};
