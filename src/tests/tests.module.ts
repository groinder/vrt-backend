import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test } from './test.entity';
import { UsersModule } from 'src/users/users.module';
import { IgnoreArea } from './ignoreArea.entity';

@Module({
  imports: [SequelizeModule.forFeature([Test, IgnoreArea]), UsersModule],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
