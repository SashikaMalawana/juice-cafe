import { Test, TestingModule } from '@nestjs/testing';
import { JuicesController } from './juices.controller';

describe('Juices Controller', () => {
  let controller: JuicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JuicesController],
    }).compile();

    controller = module.get<JuicesController>(JuicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
