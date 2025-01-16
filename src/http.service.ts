import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class HttpService {
  constructor(
    @Inject('CHARACTER_SERVICE') private readonly client: ClientProxy,
  ) {}

  notifyCharacterService(data: any) {
    return this.client.emit('character-updated', data);
  }

  requestCharacterData(data: any) {
    return this.client.send('get-character-data', data); 
  }
}
