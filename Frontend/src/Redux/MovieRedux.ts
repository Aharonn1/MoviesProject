import MoviesModel from "../Models/movies-model";
import { createStore } from "redux";
import TheatersModel from "../Models/theatersId-model";
import ChairModel from "../Models/chair-model";
import GenreModel from "../Models/genre-model";
import BuyModel from "../Models/buy-model";
import BlogModel from "../Models/blog-model";

export class MovieState {
    movie: MoviesModel[] = [];
    theater: TheatersModel[] = [];
    chair: ChairModel[] = [];
    genre: GenreModel[] = [];
    buy: BuyModel[] = [];
    blog: BlogModel[] = [];
}

export enum MovieActionType {
    getAllMovies = "getAllMovies",
    getAllTheaters = "getAllTheaters",
    getAllChairs = "getAllChairs",
    getAllGenres = "getAllGenres",
    getAllBuys = "getAllBuys",
    getAllBlogs = "getAllBlogs",
    getMovieByTheater = "getMovieByTheater",
    addMovie = "addMovie",
    deleteMovie = "deleteMovie",
}

export interface MovieAction {
    type: MovieActionType;
    payload: any;
}

export function movieReducer(currentState = new MovieState(), action: MovieAction): MovieState {
    const newState = { ...currentState }

    switch (action.type) {
        case MovieActionType.getAllMovies:
            newState.movie = action.payload
            break;
        case MovieActionType.getAllTheaters:
            newState.theater = action.payload
            break;
        case MovieActionType.getAllChairs:
            newState.chair = action.payload
            break;
        case MovieActionType.getAllGenres:
            newState.genre = action.payload
            break;
        case MovieActionType.getAllBuys:
            newState.buy = action.payload
            break;
        case MovieActionType.getAllBlogs:
            newState.blog = action.payload
            break;
        case MovieActionType.addMovie:
            newState.movie.push(action.payload)

            break;

        case MovieActionType.deleteMovie:
            const indexToDelete = newState.movie.findIndex(p => p.movieId === action.payload)
            if (indexToDelete >= 0) {
                newState.movie.splice(indexToDelete, 1)
            }
            break;
    }
    return newState
}

export const movieStore = createStore(movieReducer);