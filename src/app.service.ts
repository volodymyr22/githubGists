import { Injectable } from '@nestjs/common';
import {githubLink} from "./app.constant";
import {HttpService} from "@nestjs/axios";
import {AxiosResponse} from "axios"

@Injectable()
export class AppService {
	constructor(
		private readonly httpService: HttpService
	) {
	}

	async getUserPublicGists(username): Promise<AxiosResponse<{key: string}[]>> {
		return this.httpService.axiosRef.get(githubLink(username))
			.then(res => res.data)
	}
}
