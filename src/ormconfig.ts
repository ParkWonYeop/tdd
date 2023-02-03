import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '4131pwy',
  database: 'weather_tdd',
  entities: ['dist/entities/**/*.js'],
  synchronize: true,
};
