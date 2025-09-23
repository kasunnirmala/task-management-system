import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  AuthenticatedUserDto
} from '@task-mgmt-sys/data';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env['JWT_SECRET_KEY'] || 'secret',
    });
  }

  async validate(payload: AuthenticatedUserDto): Promise<AuthenticatedUserDto> {
    return payload;
  }
}
