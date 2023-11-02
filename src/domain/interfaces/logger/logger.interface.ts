export interface ILogger {
  debug(context: string, message: string): void;

  log(level: string, context: string, message: string): void;

  error(context: string, message: string, trace?: string): void;

  warn(context: string, message: string): void;

  verbose(context: string, message: string): void;
}
