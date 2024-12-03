import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  path: "characters",
  version: '1'
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  public createCharacter() {
    console.log("Client call api")
    return this.appService.createCharacter();
  }
}
