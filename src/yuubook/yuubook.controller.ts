import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { YuubookService } from './yuubook.service';
import { Yuubook } from './schemas/yuubook.schema';
import { CreateYuubookDto } from './dto/create-yuubook.dto';
import { UpdateYuubookDto } from './dto/update-yuubook.dto';

@Controller('yuubooks')
export class YuubookController {
    constructor(private yuubookService: YuubookService) {}

    @Get()
    async getAllYuubooks(): Promise<Yuubook[]> {
        return this.yuubookService.findAll();
    }

    @Post()
    async createYuubook(
        @Body()
        yuubook: CreateYuubookDto,
    ): Promise <Yuubook> {
        return this.yuubookService.create(yuubook);
    }

    @Get(':id')
    async getYuubook(
        @Param('id')
        id: string,
    ): Promise <Yuubook> {
        return this.yuubookService.findById(id);
    }

    @Put(':id')
    async updateYuubook(
        @Param('id')
        id: string,
        @Body()
        yuubook: UpdateYuubookDto,
    ): Promise <Yuubook> {
        return this.yuubookService.updateById(id, yuubook);
    }

    @Delete(':id')
    async deleteYuubook(
        @Param('id')
        id: string,
    ): Promise <Yuubook> {
        return this.yuubookService.deleteById(id);
    }

}
