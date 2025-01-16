import { Module } from "@nestjs/common";
import { SocketGateway } from "./socket.gateway";


@Module({
  imports: [SocketGateway],
  controllers: [],
  providers: [],
  exports: [],
})

export class GatewayModule {}