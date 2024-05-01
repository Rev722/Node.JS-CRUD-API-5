import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Yuubook } from './schemas/yuubook.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class YuubookService {
    constructor(
        @InjectModel(Yuubook.name)
        private yuubookModel:mongoose.Model<Yuubook>
    ) {}

    async findAll(): Promise<Yuubook[]> {
        const yuubooks = await this.yuubookModel.find();
        return yuubooks;
    }

    async create(yuubook: Yuubook): Promise<Yuubook> {
        const res = await this.yuubookModel.create(yuubook);
        return res;
    }

    async findById(id: string): Promise<Yuubook> {
        const yuubook = await this.yuubookModel.findById(id);

        if(!yuubook) {
            throw new NotFoundException('NO YUUBOOK!');
        }
        return yuubook;
    }

    async updateById(id: string, yuubook: Yuubook): Promise<Yuubook> {
        return await this.yuubookModel.findByIdAndUpdate(id, yuubook, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<Yuubook> {
        return await this.yuubookModel.findByIdAndDelete(id);
    }
}
