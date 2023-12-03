import moviesService from "../../../Services/movies-service";
import MoviesModel from "../../../Models/movies-model";
import React, { useEffect, useState } from "react";
import appConfig from "../../../Utils/AppConfig";
import notify from "../../../Utils/Notify";
import { NavLink } from "react-router-dom";
import "./SearchMovie.css";

function SearchMovie() {
    useEffect(() => {
        moviesService.getAllMovies()
            .then(movie => setMovieList(movie))
            .catch(err => notify.error(err))
    }, [])

    const [text, setText] = React.useState<string>('');
    const [MovieList, setMovieList] = useState<MoviesModel[]>();

    const handleOnClick1 = () => {
        const findMovies =
        MovieList && MovieList?.length > 0 ? MovieList?.filter((s) => s?.name == text) : undefined
        setMovieList(findMovies)
    }

    return (
        <div className="SearchMovie">
            <div className="input_wrapper">
                <input
                    type="text"
                    placeholder="search movie"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        setMovieList(MovieList);
                    }
                    }
                />
                <button disabled={!text} onClick={handleOnClick1}>search</button>
            </div>
            <div className="body">
                {MovieList && MovieList?.length == 0 && (
                    <div className="notFound">הסרט לא נמצא</div>
                )}
                {MovieList && MovieList?.length > 0 &&
                    MovieList?.map(user => {
                        return (
                            <div className="body_item">
                                <div className="DataCard">
                                    <div className="poster">
                                        <img className="img" src={appConfig.moviesImagesUrl + user.imageName} />
                                    </div>
                                    <div className="details">
                                        <h4>שם: {user.name}
                                            <br />
                                            זמן: {user.time.slice(0, 10).split("-").reverse().join("/")}
                                            <br />
                                            דקות: {user.length}
                                            <br />
                                            תקציר : {user.summary}
                                            <br />
                                            <NavLink to="/buyMovie">לרכישה</NavLink>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div >
    );
}

export default SearchMovie;
