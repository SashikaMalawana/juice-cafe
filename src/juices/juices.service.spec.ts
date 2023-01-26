import { Test, TestingModule } from '@nestjs/testing';
import { JuicesService } from './juices.service';

describe('JuicesService', () => {
  let service: JuicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JuicesService],
    }).compile();

    service = module.get<JuicesService>(JuicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
