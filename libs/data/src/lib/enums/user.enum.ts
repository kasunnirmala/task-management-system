export enum UserRole {
  OWNER = 'owner',
  ADMIN = 'admin',
  VIEWER = 'viewer',
}

export enum Permission {
  CREATE_TASK = 'create_task',
  EDIT_TASK = 'edit_task',
  DELETE_TASK = 'delete_task',
  VIEW_TASK = 'view_task',

  MANAGE_USERS = 'manage_users',
  VIEW_AUDIT_LOG = 'view_audit_log',

  ADMIN_ACCESS = 'admin_access',
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
