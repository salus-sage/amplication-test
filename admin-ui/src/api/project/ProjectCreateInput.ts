import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  name: string;
  owner: UserWhereUniqueInput;
};
