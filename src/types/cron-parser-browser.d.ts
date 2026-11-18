// Import only the browser-compatible parser pieces; the package root also exports Node file APIs.
declare module 'cron-parser/dist/CronExpressionParser.js' { export const CronExpressionParser: typeof import('cron-parser').CronExpressionParser; }
declare module 'cron-parser/dist/CronExpression.js' { export const CronExpression: typeof import('cron-parser').CronExpression; }
declare module 'cron-parser/dist/CronFieldCollection.js' { export const CronFieldCollection: typeof import('cron-parser').CronFieldCollection; }
declare module 'cron-parser/dist/fields/CronDayOfMonth.js' { export const CronDayOfMonth: typeof import('cron-parser').CronDayOfMonth; }
