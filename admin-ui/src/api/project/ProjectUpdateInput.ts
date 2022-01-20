import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  name?: string;
  owner?: UserWhereUniqueInput;
};
