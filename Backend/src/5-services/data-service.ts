import { ResourceNotFoundError } from "../4-models/client-errors";
import MoviesModel from "../4-models/movies-model";
import BlogModel from "../4-models/blog-model";
import dal from "../2-utils/dal";

async function getAllTheaters(): Promise<[]> {
    const sql = 'SELECT * FROM theaters';
    const theaters = await dal.execute(sql);
    return theaters;
}

async function getAllBuys(): Promise<[]> {
    const sql = 'SELECT * FROM buy';
    const theaters = await dal.execute(sql);
    return theaters;
}

async function getAllBlogs(): Promise<[]> {
    const sql = 'SELECT * FROM blog';
    const blog = await dal.execute(sql);
    return blog;
}

async function getAllGenres(): Promise<[]> {
    const sql = 'SELECT * FROM genre';
    const genre = await dal.execute(sql);
    return genre;
}

async function getAllChairs(): Promise<[]> {
    const sql = 'SELECT * FROM chair';
    const chair = await dal.execute(sql);
    return chair;
}

async function getAllMovies(): Promise<MoviesModel[]> {
    const sql = "SELECT * FROM movies";
    const movies = await dal.execute(sql);
    return movies;
}

async function getOneMovie(id: number): Promise<MoviesModel> {
    const sql = `SELECT 
    movieId AS movieId,
    name AS name,
    length AS length,
    video AS video,
    summary AS summary,
    imageName AS imageName
    FROM movies
    WHERE movieId = ?`;
    const movies = await dal.execute(sql, id);
    const movie = movies[0];
    if (!movie) throw new ResourceNotFoundError(id);
    return movie;
}

async function getOneBlog(id: number): Promise<BlogModel> {
    const sql = `SELECT 
    blogId AS blogId,
    name AS name,
    title AS title,
    story AS story,
    video AS video,
    imageName AS imageName
    FROM blog
    WHERE blogId = ?`;
    const blogs = await dal.execute(sql, id);
    const blog = blogs[0];
    if (!blog) throw new ResourceNotFoundError(id);
    return blog;
}

async function getMoviesByTheaterId(movieId: number): Promise<MoviesModel[]> {
    const sql = 'SELECT * FROM movies WHERE theaterId = ?';
    const theatersId = await dal.execute(sql, movieId);
    return theatersId;
}

async function getMoviesByTheaterGenre(genreId: number): Promise<MoviesModel[]> {
    const sql = 'SELECT * FROM movies WHERE genreId = ?';
    const genresId = await dal.execute(sql, genreId);
    return genresId;
}

export default {
    getAllTheaters,
    getAllMovies,
    getMoviesByTheaterId,
    getAllGenres,
    getMoviesByTheaterGenre,
    getOneMovie,
    getAllBlogs,
    getOneBlog,
    getAllBuys,
    getAllChairs,
}