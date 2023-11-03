import { UserAccountModel } from '../../../models/userAccount';

export interface IAccountRepository {
  getAccountByEmail(email: string): Promise<UserAccountModel>;
}
