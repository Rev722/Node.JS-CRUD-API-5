import { Category } from "../schemas/yuubook.schema";



export class CreateYuubookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}