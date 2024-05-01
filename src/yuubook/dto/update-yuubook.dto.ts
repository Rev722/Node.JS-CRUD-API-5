import { Category } from "../schemas/yuubook.schema";



export class UpdateYuubookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}