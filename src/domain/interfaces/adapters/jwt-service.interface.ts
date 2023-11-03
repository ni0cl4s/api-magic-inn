export interface IJwtPayload {
  accountId: string;
  accountEmail: string;
  accountRole: string;
  userProfileId: string;
}

export interface IJwtService {
  checkToken(token: string): Promise<object>;

  generateToken(payload: IJwtPayload, secret: string): string;

  decodeToken(token: string): Promise<any>;
}
