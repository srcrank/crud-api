import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Issue } from './issue/entities/issue.entity';
import { IssueModule } from './issue/issue.module';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: '../db',
  entities: [Issue],
  //synchronize not for use in production, just development or debug. Adding new entities will automatically add to db.
  synchronize: true,
};

@Module({
  imports: [IssueModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
