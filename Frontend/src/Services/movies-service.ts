import { MovieActionType, movieStore } from "../Redux/MovieRedux";
import TheatersModel from "../Models/theatersId-model";
import MoviesModel from "../Models/movies-model";
import ChairModel from "../Models/chair-model";
import GenreModel from "../Models/genre-model";
import BlogModel from "../Models/blog-model";
import appConfig from "../Utils/AppConfig";
import BuyModel from "../Models/buy-model";
import axios from "axios";

class MoviesService {

    async getAllTheaters(): Promise<TheatersModel[]> {
        try {
            let theater = movieStore.getState().theater
            if (theater.length === 0) {
                const response = await axios.get<TheatersModel[]>(appConfig.theatersUrl)
                theater = response.data;
                movieStore.dispatch({ type: MovieActionType.getAllTheaters, payload: theater })
            }
            return theater
        } catch (err: any) {
            console.log(err)
        }
    }

    async getAllBlogs(): Promise<BlogModel[]> {
        let blog = movieStore.getState().blog
        if (blog.length === 0) {
            const response = await axios.get<BlogModel[]>(appConfig.blogUrl)
            blog = response.data;
            movieStore.dispatch({ type: MovieActionType.getAllBlogs, payload: blog })
        }
        return blog
    }

    async getAllGenres(): Promise<GenreModel[]> {
        let genre = movieStore.getState().genre
        if (genre.length === 0) {
            const response = await axios.get<GenreModel[]>(appConfig.genresUrl)
            genre = response.data;
            movieStore.dispatch({ type: MovieActionType.getAllGenres, payload: genre })
        }
        return genre
    }

    async getAllChairs(): Promise<ChairModel[]> {
        let chair = movieStore.getState().chair;
        if (chair.length === 0) {
            const response = await axios.get<ChairModel[]>(appConfig.chairUrl)
            chair = response.data;
            movieStore.dispatch({ type: MovieActionType.getAllChairs, payload: chair })
        }
        return chair
    }

    async getAllBuys(): Promise<BuyModel[]> {
        let buy = movieStore.getState().buy;
        if (buy.length === 0) {
            const response = await axios.get<BuyModel[]>(appConfig.buyUrl)
            buy = response.data;
            movieStore.dispatch({ type: MovieActionType.getAllBuys, payload: buy })
        }
        return buy
    }

    async getAllBuysAfterBuy(): Promise<BuyModel[]> {
        let buy = await this.getAllBuys();
        const favoriteBuys = buy.filter(b => b.priceCount && b)
        await this.getAllBuys();
        return favoriteBuys;
    }

    async getAllChairsAfterBuy(): Promise<ChairModel[]> {
        await this.getAllBuysAfterBuy();
        let chair = await this.getAllChairs();
        const favoriteChairs = (chair.filter(c => c.chairCount >= 2))
        await this.getAllChairs();
        await this.getAllBuysAfterBuy();
        return favoriteChairs;
    }

    async getAllMovies(): Promise<MoviesModel[]> {
        let movie = movieStore.getState().movie
        if (movie.length === 0) {
            const response = await axios.get<MoviesModel[]>(appConfig.moviesUrl)
            const movie = response.data;
            movieStore.dispatch({ type: MovieActionType.getAllMovies, payload: movie })
        }
        return movie;
    }

    async getMovieByTheater(theaterId: number): Promise<MoviesModel[]> {
        let theaters = movieStore.getState().movie
        let theater = theaters.find(t => t.theaterId === theaterId)
        if (!theater) {
            const response = await axios.get<MoviesModel[]>(appConfig.moviesByTheaterUrl + theaterId);
            theaters = response.data;
        }
        return theaters;
    }

    async getMovieByGenre(genreId: number): Promise<MoviesModel[]> {
        let genres = movieStore.getState().movie
        let genre = genres.find(g => g.genreId === genreId)
        if (!genre) {
            const response = await axios.get<MoviesModel[]>(appConfig.moviesByGenreUrl + genreId);
            genres = response.data;
        }
        return genres;
    }

    async getOneMovie(movieId: number): Promise<MoviesModel> {
        let movies = movieStore.getState().movie;
        let movie = movies.find(m => m.movieId === movieId)
        if (!movie) {
            const response = await axios.get<MoviesModel>(appConfig.moviesUrl + movieId)
            movie = response.data;
        }
        return movie;
    }

    async geMoviesOfToday(): Promise<MoviesModel[]> {
        const day = new Date().getDate();
        const month = new Date().getMonth();
        let movies = await this.getAllMovies();
        const moviesActive = movies.filter(m => new Date(m.date).getDate() === day && new Date(m.date).getMonth() === month)
        return moviesActive;
    }

    async geMoviesOfTomorrow(): Promise<MoviesModel[]> {
        const day = new Date().getDate() + 1;
        const month = new Date().getMonth();
        let movies = await this.getAllMovies();
        const moviesActive = movies.filter(m => new Date(m.date).getDate() === day && new Date(m.date).getMonth() === month)
        return moviesActive;
    }

    async getOneBlog(blogId: number): Promise<BlogModel> {
        let blogs = movieStore.getState().blog;
        let blog = blogs.find(b => b.blogId === blogId)
        if (!blog) {
            const response = await axios.get<BlogModel>(appConfig.blogUrl + blogId)
            blog = response.data;
        }
        return blog;
    }
}

const moviesService = new MoviesService();
export default moviesService;