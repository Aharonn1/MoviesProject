class TheatersModel {

    theaterId: number;
    theaterName: string;

    constructor(theater: TheatersModel) {
        this.theaterId = theater.theaterId;
        this.theaterName = theater.theaterName;
    }
}

export default TheatersModel;