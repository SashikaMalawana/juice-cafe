import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateJuiceDto } from './dto/create-juice.dto';
import { JuicesService } from './juices.service';
import { Juice } from './interfaces/juice.interface';

@Controller('juice')
export class JuicesController {
  constructor(
    private readonly juicesService: JuicesService
  ) { }

  @Get()
  findJuices(): Promise<Juice[]> {
    const result = this.juicesService.findJuices();
    return result;
  }

  @Get('/:id')
  findJuice(@Param() param): Promise<Juice> {
    const result = this.juicesService.findJuice(param.id);
    return result;
  }

  @Post()
  createJuice(@Body() createJuiceDto: CreateJuiceDto): Promise<Juice> {
    const result = this.juicesService.createJuice(createJuiceDto);
    return result;
  }

  @Delete('/:id')
  deleteJuice(@Param() param): Promise<Juice> {
    const result = this.juicesService.deleteJuice(param.id);
    return result;
  }

  @Put('/:id')
  updateJuice(@Body() updateJuiceDto: CreateJuiceDto, @Param() param): Promise<Juice> {
    const result = this.juicesService.updateJuice(param.id, updateJuiceDto);
    return result;
  }
}
