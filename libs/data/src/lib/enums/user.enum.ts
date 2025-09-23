export enum UserRole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  VIEWER = 'VIEWER',
}

export enum Permission {
  CREATE_TASK = 'CREATE_TASK',
  EDIT_TASK = 'EDIT_TASK',
  DELETE_TASK = 'DELETE_TASK',
  VIEW_TASK = 'VIEW_TASK',

  MANAGE_USERS = 'MANAGE_USERS',
  VIEW_AUDIT_LOG = 'VIEW_AUDIT_LOG',

  ADMIN_ACCESS = 'ADMIN_ACCESS',
}

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
    [UserRole.OWNER]: [
      Permission.CREATE_TASK,
      Permission.EDIT_TASK,
      Permission.DELETE_TASK,
      Permission.VIEW_TASK,
      Permission.MANAGE_USERS,
      Permission.VIEW_AUDIT_LOG,
      Permission.ADMIN_ACCESS,
    ],
    [UserRole.ADMIN]: [
      Permission.CREATE_TASK,
      Permission.EDIT_TASK,
      Permission.DELETE_TASK,
      Permission.VIEW_TASK,
      Permission.VIEW_AUDIT_LOG,
    ],
    [UserRole.VIEWER]: [
      Permission.VIEW_TASK,
    ],
  };
