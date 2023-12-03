import TheatersModel from "../../../Models/theatersId-model";
import moviesService from "../../../Services/movies-service";
import { ChangeEvent, useEffect, useState } from "react";
import MoviesModel from "../../../Models/movies-model";
import DataCard from "../DataCard/DataCard";
import notify from "../../../Utils/Notify";
import "./DataList.css";

function DataList(): JSX.Element {

    const [thread, setThread] = useState<TheatersModel[]>([]);
    const [movie, setMovie] = useState<MoviesModel[]>([]);

    useEffect(() => {
        moviesService.getAllTheaters()
            .then(thread => setThread(thread))
            .catch(err => notify.error(err))
    }, [])

    async function name(args: ChangeEvent<HTMLSelectElement>) {
        const theaterId = +args.target.value;
        const dbTheater = await moviesService.getMovieByTheater(theaterId)
        setMovie(dbTheater)
    }

    return (
        <div className="DataList">
            <a href="#" className="logo">
                <i className="bx bsx-movie">סרטים</i>
            </a>
            <div className="bx bx-menu" id="menu-icon"></div>
            <select defaultValue="" onChange={name}>
                {<option disabled value="">select theater</option>}
                {thread.map(t => <option key={t.theaterId} value={t.theaterId}>{t.theaterName}</option>)}
            </select>
            <br /><br /><br />
            {movie.map(m => <DataCard key={m.movieId} movie={m} />)}
            <br />
            <h1>facebook</h1>
        </div>
    );
}

export default DataList;