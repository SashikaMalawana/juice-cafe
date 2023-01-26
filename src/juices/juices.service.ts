import { Injectable } from '@nestjs/common';
import { Juice } from './interfaces/juice.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class JuicesService {
  constructor(
    @InjectModel('Juice')
    private readonly juiceModel: Model<Juice>
  ) { }

  async findJuices(): Promise<Juice[]> {
    const result = await this.juiceModel.find();
    return result;
  }

  async findJuice(id: string): Promise<Juice> {
    const result = await this.juiceModel.findOne({ _id: id });
    return result;
  }

  async createJuice(juice: Juice): Promise<Juice> {
    const newJuice = new this.juiceModel(juice);
    const result = await newJuice.save();
    return result;
  }

  async deleteJuice(id: string): Promise<Juice> {
    const result = await this.juiceModel.findByIdAndRemove(id);
    return result;
  }

  async updateJuice(id: string, juice: Juice): Promise<Juice> {
    const result = await this.juiceModel.findByIdAndUpdate(id, juice, { new: true });
    return result;
  }
}
