import {
  CACHE_MANAGER,
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { Cache } from 'cache-manager';

@Controller()
export class AppController {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(600) // record removed after 10 minutes
  @Get('/method-cache-test/:param') // cache key = "/method-cache-test/:param"
  async getMessageWithParam(@Param('param') param: string): Promise<string> {
    const msg = `This text is cached with provided value: ${param}`;
    console.log(msg);
    // cache value is function output
    return msg;
  }
}
