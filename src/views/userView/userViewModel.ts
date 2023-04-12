import UserServiceImpl, {
  UserService as UserService,
} from "../../services/users/index";
import { User } from "../../types/user";

interface UserViewModelMethods {
  loadUsers(): Promise<void>;
}

class UserViewModel implements UserViewModelMethods {
  private users: User[] = [];
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
    this.loadUsers = this.loadUsers.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  public async loadUsers(): Promise<void> {
    this.users = await this.userService.getAllUsers();
  }

  public getUsers(): User[] {
    return this.users;
  }
}

export const useUserViewModel = () => new UserViewModel(UserServiceImpl);
