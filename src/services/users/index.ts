import { User, UsersResponse } from "../../types/user";
import HTTPAdapter from "../adapters/HTTPClientAdpter";

interface UserServiceMethods {
  getAllUsers(): Promise<User[]>;
}

class UserService extends HTTPAdapter implements UserServiceMethods {
  constructor(baseURL: string) {
    super(baseURL);
  }

  public async getAllUsers(): Promise<User[]> {
    const {
      data: { results: users },
    } = await this.get<UsersResponse>("");

    return users;
  }
}

export default new UserService(process.env.USER_SERVICE_URL ?? "");
