import moviesService from "../../../Services/movies-service";
import BuyMovieCard from "../BuyMovieCard/BuyMovieCard";
import BuyModel from "../../../Models/buy-model";
import notify from "../../../Utils/Notify";
import { useEffect, useState } from "react";
import "./BuyMovie.css";

function BuyMovie(){

    const [buy, setBuy] = useState<BuyModel[]>([]);
    
    useEffect(() => {
            moviesService.getAllBuys()
            .then(buy => setBuy(buy))
            .catch(err => notify.error(err))
    },[])
        
    return (
        <div className="BuyMovie">
			<h1>buy movie</h1>
            <div className="cardDiv">
                {buy.map((item) => <BuyMovieCard key={item.buyId} buy={item} />)}
            </div>
        </div>
    );
}

export default BuyMovie;