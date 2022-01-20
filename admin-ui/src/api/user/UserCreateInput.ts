export type UserCreateInput = {
  fullName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
