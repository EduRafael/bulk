import { Module } from '@nestjs/common';
import { BulkController } from './controllers/bulk/bulk.controller';

@Module({
  controllers: [BulkController],
})
export class BulkModule {}
