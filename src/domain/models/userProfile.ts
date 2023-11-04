export class UserProfileModel {
  public readonly id: string;
  public readonly characterName: string;
  public readonly characterRace: string;
  public readonly characterClass: string;
  public readonly userAccountId: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(
    id: string,
    characterName: string,
    characterRace: string,
    characterClass: string,
    userAccountId: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.characterName = characterName;
    this.characterRace = characterRace;
    this.characterClass = characterClass;
    this.userAccountId = userAccountId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
