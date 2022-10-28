import { Module, CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

import { AppController } from './app.controller';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore as any,
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
