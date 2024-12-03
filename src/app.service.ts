import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('CHARACTER_SERVICE')
    private readonly characterServiceClient: ClientProxy
  ) {
  }
  
  createCharacter() {
    console.log("Client call api")
    this.characterServiceClient.emit('character_created', {
      desc: "keccc"
    })
  }
}
