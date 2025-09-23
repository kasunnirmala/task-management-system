export class CreateTaskDto {
  title!: string;
  description!: string;
  category!: string;
  createdBy?: number;
  assignedTo!: number;
  organization?: number;
}
