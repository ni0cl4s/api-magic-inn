import { UserProfileModel } from '../../../models/userProfile';

export interface IProfileRepository {
  getProfileByAccountId(accountId: string): Promise<UserProfileModel>;
}
