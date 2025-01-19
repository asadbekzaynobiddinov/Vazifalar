import { Injectable, LoggerService } from '@nestjs/common';
import { Logtail } from '@logtail/node';

@Injectable()
export class LogtailLoggerService implements LoggerService {
  private logtail: Logtail;

  constructor() {
    this.logtail = new Logtail('7KLrcRwq5LmgSjr9ATfnUpgc');
  }

  log(message: string) {
    this.logtail.info(message);
  }

  error(message: string, trace: string) {
    this.logtail.error(message, { trace });
  }

  warn(message: string) {
    this.logtail.warn(message);
  }

  debug(message: string) {
    this.logtail.debug(message);
  }
}
export { LoggerService };
