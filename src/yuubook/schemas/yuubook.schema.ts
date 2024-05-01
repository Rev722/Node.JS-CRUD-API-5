import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {

    HORROR = 'ANIME',
    SOULEATER = 'BLACKSTAR',
    MAKA = 'HUNTER',
}


@Schema({
    timestamps: true,
})

export class Yuubook {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const YuubookSchema = SchemaFactory.createForClass(Yuubook)