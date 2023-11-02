export interface IJwtPayload {
  accountId: string;
  accountEmail: string;
  accountRole: string;
  userProfileId: string;
  iat?: number;
  exp?: number;
}

export interface IJwtService {
  checkToken(token: string): Promise<object>;

  generateToken(
    payload: IJwtPayload,
    secret: string,
    expiresIn: string,
  ): string;

  decodeToken(token: string): Promise<any>;
}
