import { IsString, IsNumber, IsBoolean, IsNotEmpty, IsOptional } from "class-validator";

export class CreateJuiceDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly ingredients?: string;

  @IsOptional()
  @IsNumber()
  readonly price?: number;

  @IsOptional()
  @IsBoolean()
  readonly available?: boolean;
}
