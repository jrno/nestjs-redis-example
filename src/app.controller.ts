import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Controller()
export class AppController {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  @Get()
  async getHello(): Promise<string> {
    await this.cacheManager.set('key', 'value', 10000);
    console.log(await this.cacheManager.get('key'));
    return 'Hello';
  }
}
