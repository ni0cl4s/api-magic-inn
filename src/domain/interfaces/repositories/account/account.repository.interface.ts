import { UserAccountModel } from '../../../models/userAccount';

export interface IAccountRepository {
  getAccountByEmail(email: string): Promise<UserAccountModel>;

  createAccount(
    email: string,
    hashedPassword: string,
  ): Promise<UserAccountModel>;
}
