export class UserModel{
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  customerId?: string;
  role?: string;
  token?: string;
  isLogged: boolean = false;
}
