import "./WhatInTheater.css";
import { ChangeEvent, useEffect, useState } from "react";
import moviesService from "../../../Services/movies-service";
import MoviesModel from "../../../Models/movies-model";
import GenreModel from "../../../Models/genre-model";
import DataCard from "../DataCard/DataCard";
import notify from "../../../Utils/Notify";
import _ from "lodash";

function WhatInTheater(): JSX.Element {

    const [genre, setGenre] = useState<GenreModel[]>([]);
    const [movie, setMovie] = useState<MoviesModel[]>([]);

    useEffect(() => {
        moviesService.getAllGenres()
            .then(genre => setGenre(genre))
            .catch(err => notify.error(err))
    }, [])

    async function geMoviesOfToday() {
        const movieToday1 = moviesService.geMoviesOfToday()
        setMovie(await movieToday1)
        // .then(moviesActive => setMovie(moviesActive))
        // .catch(err => alert(err.message))
    }

    function geMoviesOfTomorrow() {
        moviesService.geMoviesOfTomorrow()
            .then(moviesActive => setMovie(moviesActive))
            .catch(err => alert(err.message))
    }

    async function name(args: ChangeEvent<HTMLSelectElement>) {
        const genreId = +args.target.value;
        const dbGenre = await moviesService.getMovieByGenre(genreId)
        setMovie(dbGenre)
    }

    return (
        <div className="WhatInTheater">
            <select defaultValue="" onChange={name}>
                {<option disabled value="">בחרו סוג הקרנה</option>}
                {genre.map(g => <option key={g.genreId} value={g.genreId}>{g.genreName}</option>)}
            </select>
            <span> | </span>
            <select defaultValue="" onClick={geMoviesOfToday}>
                <option disabled value="">היום</option>
            </select>
            <span> | </span>
            <select defaultValue="" onClick={geMoviesOfTomorrow}>
                <option disabled value="">מחר</option>
            </select>
            <br /><br /><br />
            {movie.map(m => <DataCard key={m.movieId} movie={m} />)}
        </div>
    );
}

export default WhatInTheater;