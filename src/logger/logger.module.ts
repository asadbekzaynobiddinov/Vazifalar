import { Module } from '@nestjs/common';
import { LogtailLoggerService } from './logger.service';

@Module({
  providers: [LogtailLoggerService],
  exports: [LogtailLoggerService],
})
export class LoggerModule {}
