import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { PermissionEntity } from '../entities/permission.entity';

export default class PermissionSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const repo = dataSource.getRepository(PermissionEntity);

    await repo.insert([{ id: 1, permission: 'CREATE_TASK' }]);
    await repo.insert([{ id: 2, permission: 'EDIT_TASK' }]);
    await repo.insert([{ id: 3, permission: 'DELETE_TASK' }]);
    await repo.insert([{ id: 4, permission: 'VIEW_TASK' }]);
    await repo.insert([{ id: 5, permission: 'MANAGE_USERS' }]);
    await repo.insert([{ id: 6, permission: 'VIEW_AUDIT_LOG' }]);
    await repo.insert([{ id: 7, permission: 'ADMIN_ACCESS' }]);
  }
}
