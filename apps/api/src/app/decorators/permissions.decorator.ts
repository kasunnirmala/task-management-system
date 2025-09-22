import { SetMetadata } from '@nestjs/common';
import { Permission } from '@task-mgmt-sys/data';

export const Permissions = (...permissions: Permission[]) =>
  SetMetadata('permissions', permissions);
