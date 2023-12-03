import MoviesModel from "../../../Models/movies-model";
import appConfig from "../../../Utils/AppConfig";
import { NavLink } from "react-router-dom";
import "./DataCard.css";

interface propsCardMovie {
    movie: MoviesModel
}

function DataCard(props: propsCardMovie): JSX.Element {

    return (
        <div className="body_item">
            <NavLink to={"/DetailsCard/" + props.movie.movieId}>
                <div className="DataCard">
                    <div className="poster">
                        <img className="img" src={appConfig.moviesImagesUrl + props.movie.imageName} />
                    </div>
                    <div className="details">
                        <h4>שם: {props.movie.name}
                            <br />
                            זמן: {props.movie.time.slice(0, 10).split("-").reverse().join("/")}
                            <br />
                            דקות: {props.movie.length}
                            <br />
                            תקציר : {props.movie.summary}
                        </h4>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default DataCard;