import { UserModel } from './user.model';

export class CustomerModel{
  document: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  telephone: number;
  address: string;
  inputCity: string;
  inputState: string;
  user: UserModel;
}