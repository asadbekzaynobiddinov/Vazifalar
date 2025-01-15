import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRoles {
  user = 'user',
  admin = 'admin',
}

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column({ default: UserRoles.user })
  role: UserRoles;
}
