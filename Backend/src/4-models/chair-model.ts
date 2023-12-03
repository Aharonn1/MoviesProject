import { UploadedFile } from "express-fileupload";

class ChairModel {

    chairId: number;
    chairNumber: number;
    chairCount: number;
    buyCount: number;
    imageName: string;
    image: UploadedFile;

    public constructor(chair: ChairModel) {
        this.chairId = chair.chairId;
        this.chairNumber = chair.chairNumber;
        this.chairCount = chair.chairCount;
        this.buyCount = chair.buyCount;
        this.imageName = chair.imageName;
        this.image = chair.image
    }
}

export default ChairModel