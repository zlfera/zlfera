export type IUserModuleTypes = {
  profile: User;
};
export type User = {
  id: number;
  avatar: string;
  nickname: string;
  account: string;
  mobile: number;
  token: string;
};
