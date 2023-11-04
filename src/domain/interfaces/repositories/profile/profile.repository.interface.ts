import { UserProfileModel } from '../../../models/userProfile';

export interface IProfileRepository {
  getProfileByAccountId(accountId: string): Promise<UserProfileModel>;

  createProfile(
    characterName: string,
    characterClass,
    characterRace,
    userAccountId: string,
  ): Promise<UserProfileModel>;
}
