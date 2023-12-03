class GenreModel {
    genreId: number;
    genreName: string;

    constructor(genre: GenreModel) {
        this.genreId = genre.genreId;
        this.genreName = genre.genreName;
    }
}

export default GenreModel;