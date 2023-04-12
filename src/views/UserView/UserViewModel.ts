import UserServiceImpl, {
  UserService as UserService,
} from "../../services/users/index";
import { User } from "../../types/user";

interface UserViewModelMethods {
  users: User[];
  loadUsers(): Promise<void>;
}

class UserViewModel implements UserViewModelMethods {
  public users: User[] = [];
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public async loadUsers(): Promise<void> {
    const users = await this.userService.getAllUsers();
    this.users = users;
  }
}

export default new UserViewModel(UserServiceImpl);
