import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JWTAuthService {
  constructor(private readonly jwtService: JwtService) {}

  async signToken(payload: any): Promise<string> {
    return await this.jwtService.signAsync(payload);
  }
}
