import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({ cors: true })
  export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
  
    handleConnection(client: Socket) {
      console.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`);
    }
  
    @SubscribeMessage('character-take-damage')
    handleNewMessage(client: Socket, payload: any) {
      console.log(`Handler: ${payload}`);
    }
  }
  