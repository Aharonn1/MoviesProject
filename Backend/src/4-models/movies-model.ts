import { UploadedFile } from "express-fileupload";
class MoviesModel {
    movieId: number;
    theaterId: number;
    genreId: number;
    name: string;
    time: string;
    length: number;
    date: string;
    endDate: string;
    video: string;
    image: UploadedFile;
    imageName: string;
    summary: string;

    constructor(movie: MoviesModel) {
        this.movieId = movie.movieId;
        this.theaterId = movie.theaterId;
        this.genreId = movie.genreId;
        this.name = movie.name;
        this.time = movie.time;
        this.length = movie.length;
        this.date = movie.date;
        this.endDate = movie.endDate;
        this.image = movie.image;
        this.imageName = movie.imageName;
        this.summary = movie.summary;
        this.video = movie.video;
    }
}
export default MoviesModel;