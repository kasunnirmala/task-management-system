
export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  organizationId: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
