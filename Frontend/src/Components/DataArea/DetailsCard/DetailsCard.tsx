import moviesService from "../../../Services/movies-service";
import MoviesModel from "../../../Models/movies-model";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import notify from "../../../Utils/Notify";
import "./DetailsCard.css";

function DetailsCard(): JSX.Element {

    const [movie, setMovie] = useState<MoviesModel>()
    const params = useParams();

    useEffect(() => {
        moviesService.getOneMovie(+params.movieId)
            .then(movie => setMovie(movie))
            .catch(err => notify.error(err))
    }, [])

    return (
        <div className="DetailsCard">
            {movie &&
                <>
                    <div className="movie2">{<ReactPlayer controls url={movie.video} />}</div>                   
                </>
            }
        </div>
    );
}
export default DetailsCard;
