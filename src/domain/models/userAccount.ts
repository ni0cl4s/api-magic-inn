export class UserAccountModel {
  public readonly id: string;
  public readonly email: string;
  public readonly hashedPassword: string;
  public readonly role: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(
    id: string,
    email: string,
    hashedPassword: string,
    role: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.email = email;
    this.hashedPassword = hashedPassword;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
