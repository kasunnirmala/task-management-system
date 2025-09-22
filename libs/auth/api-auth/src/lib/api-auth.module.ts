import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { PermissionsGuard } from './guards/permissions.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
@Module({
  controllers: [],
  providers: [JwtStrategy, JwtAuthGuard,PermissionsGuard],
  exports: [JwtAuthGuard,PermissionsGuard],
})
export class ApiAuthModule {}
