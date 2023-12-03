import moviesService from "../../../Services/movies-service";
import ChairModel from "../../../Models/chair-model";
import ChairCard from "../ChairCard/ChairCard";
import { useEffect, useState } from "react";
import notify from "../../../Utils/Notify";
import { NavLink } from "react-router-dom";
import "./Chairs.css";

function Chairs(): JSX.Element {

    const [chair, setChair] = useState<ChairModel[]>([]);

    useEffect(() => {
        moviesService.getAllChairs()
            .then(chair => setChair(chair))
            .catch(err => notify.error(err))
    }, [])

    function favoriteChairs() {
        moviesService.getAllChairsAfterBuy()
            .then(favoriteChairs => setChair(favoriteChairs))
            .catch(err => alert(err.message))
    }
    return (
        <div className="Chairs">
            <h1>chairs</h1>
            <div className="cardDiv">
                {chair.map((item) => <ChairCard key={item.chairId} chair={item} />)}
            </div>
            <select defaultValue="" onClick={favoriteChairs}>
                <option disabled value="">כסאות</option>
                <option value={5}>כסאות שבחרת</option>
            </select>
            <button>
                <a><NavLink to={"/buyMovie"}>חזרה</NavLink></a>
            </button>
        </div>
    );
}

export default Chairs;