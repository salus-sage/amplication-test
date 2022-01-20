import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "fullName";

export const UserTitle = (record: TUser): string => {
  return record.fullName || record.id;
};
