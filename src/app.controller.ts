import {Controller, Get, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {AxiosResponse} from "axios";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getUserPublicGists(
    @Query('username') username: string
  ): Promise<AxiosResponse<{key: string}[]>>{
    return this.appService.getUserPublicGists(username);
  }
}
