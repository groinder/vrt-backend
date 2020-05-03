import { Injectable } from '@nestjs/common';
import config from '../../../config';

@Injectable()
export class ConfigService {

  get jwtConfig() {
      return config.jwt;
  }

  get imgConfig() {
    return config.image;
}
}
