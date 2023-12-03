import { UploadedFile } from "express-fileupload";

class BuyModel {
    public buyId: number;
    public body: string;
    public title: string;
    public food:string;
    public drink:string;
    public price:number
    public imageName: string;
    public image: UploadedFile;
    public constructor(buy: BuyModel) {
        this.buyId = buy.buyId
        this.image = buy.image
        this.imageName = buy.imageName;
        this.body = buy.body;
        this.title = buy.title
        this.food = buy.food;
        this.drink = buy.drink;
        this.price = buy.price 
    }
}
export default BuyModel