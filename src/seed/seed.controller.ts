import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) { }

  @Get()
  executeSeed() {
    // return this.seedService.executeSeed();
    // return this.seedService.executeSeedMethod2();
    return this.seedService.executeSeedMethod3();
  }
}
