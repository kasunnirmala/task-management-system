import { User } from '../../interfaces';

export interface AuthenticatedUserDto extends User {
  permissions: string[];
}
