import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

export type UserUpdateInput = {
  fullName?: string | null;
  user?: UserWhereUniqueInput | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
