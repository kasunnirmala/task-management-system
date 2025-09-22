export interface AuthenticatedUserDto {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roleId: number;
  roleName: string;
  organizationId: number;
  organizationName: string;
  permissions: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
