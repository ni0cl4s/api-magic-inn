import { Injectable } from '@nestjs/common';
import { ILogger } from '../../domain/interfaces/logger/logger.interface';
import * as winston from 'winston';

@Injectable()
export class LoggerService implements ILogger {
  private readonly winstonLogger: winston.Logger;

  constructor() {
    this.winstonLogger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(
          (info) => `[${info.timestamp}] ${info.level}: ${info.message}`,
        ),
      ),
      transports: [new winston.transports.Console()],
    });
  }

  debug(context: string, message: string) {
    if (process.env.NODE_ENV !== 'production') {
      this.winstonLogger.debug(`[DEBUG] ${message}`, context);
    }
  }

  log(context: string, message: string) {
    this.winstonLogger.info(message, context);
  }

  error(context: string, message: string, trace?: string) {
    this.winstonLogger.error(`[ERROR] ${message}`, trace, context);
  }

  warn(context: string, message: string) {
    this.winstonLogger.warn(`[WARN] ${message}`, context);
  }

  verbose(context: string, message: string) {
    if (process.env.NODE_ENV !== 'production') {
      this.winstonLogger.verbose(`[VERBOSE] ${message}`, context);
    }
  }
}
