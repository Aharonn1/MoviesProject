import moviesService from "../../../Services/movies-service";
import appConfig from "../../../Utils/AppConfig";
import BuyModel from "../../../Models/buy-model";
import { NavLink } from "react-router-dom";
import notify from "../../../Utils/Notify";
import { useState } from "react";
import "./BuyMovieCard.css";

interface propsCardBuy {
    buy: BuyModel
}
function BuyMovieCard(props1: propsCardBuy) {

    const [buys, setBuys] = useState<BuyModel[]>([])

    async function buy(buiId: number): Promise<void> {
        await moviesService.getAllBuysAfterBuy()
            .then(buy => setBuys(buy))
            .catch(err => alert(err.message))
        let buyCount = props1.buy.buyCount++;
        if (props1.buy.buyCount > 1) {
            props1.buy.price += props1.buy.priceCount;
        } else if (props1.buy.buyCount < 0) {
            notify.error("הכנס מספר חוקי")
        }
    }

    async function unBuy(buyId: number): Promise<void> {
        await moviesService.getAllBuysAfterBuy()
            .then(buy => setBuys(buy))
            .catch(err => alert(err.message))
        let buyCount = props1.buy.buyCount--;
        if (props1.buy.buyCount > 0) {
            let priceCount1 = props1.buy.price -= props1.buy.priceCount;
        } else if (props1.buy.buyCount < 0) {
            notify.error("הכנס מספר חוקי")
        }
    }

    return (
        <div className="BuyMovieCard-container">
            <div className="image-container">
                <img className="img" src={appConfig.moviesImagesUrl + props1.buy.imageName} />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{props1.buy.title}</h3>
                </div>
                <div className="card-body">
                    <p>{props1.buy.body}</p>
                    <br />
                    <p>{props1.buy.food}</p>
                    <p>{props1.buy.drink}</p>
                    <p>מחיר:{props1.buy.price}  שח </p>
                </div>
                <br />
                <div className="h2" onClick={() => unBuy(props1.buy.buyId)}>➖
                </div>
                <div className="h1" onClick={() => buy(props1.buy.buyId)}>➕
                </div>
                <br /> {props1.buy.buyCount}:סך הכל
                <div className="btn">
                    <button>
                        <a><NavLink to={"/chairs"}>כיסאות</NavLink></a>
                    </button>
                </div>
                <br />
                <div className="btn">
                    <button>
                        <a><NavLink to={"/creditCardForm"}>לתשלום</NavLink></a>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default BuyMovieCard;