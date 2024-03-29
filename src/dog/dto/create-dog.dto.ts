import { IsString } from 'class-validator';

export class CreateDogDto {
  @IsString()
  name: string;
  breed: string;
  color: string;
}
