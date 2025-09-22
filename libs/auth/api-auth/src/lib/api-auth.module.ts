import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { PermissionsGuard } from './guards/permissions.guard';
import { JWTAuthService } from './services/jwt-auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env['JWT_SECRET_KEY'],
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [],
  providers: [JwtStrategy, JwtAuthGuard, PermissionsGuard, JWTAuthService],
  exports: [JwtAuthGuard, PermissionsGuard, JWTAuthService],
})
export class ApiAuthModule {}
