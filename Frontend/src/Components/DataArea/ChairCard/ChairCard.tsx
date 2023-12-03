import moviesService from "../../../Services/movies-service";
import ChairModel from "../../../Models/chair-model";
import appConfig from "../../../Utils/AppConfig";
import BuyModel from "../../../Models/buy-model";
import notify from "../../../Utils/Notify";
import { useState } from "react";
import "./ChairCard.css";
import React from "react";

interface propsCardBuy {
    chair: ChairModel
}

function ChairCard(props1: propsCardBuy): JSX.Element {

    const [buys, setBuys] = useState<BuyModel[]>([])

    async function buy(): Promise<void> {
        moviesService.getAllBuysAfterBuy()
            .then(chair => setBuys(chair))
            .catch(err => alert(err.message))
        let buyCount = props1.chair.chairCount += props1.chair.chairCount;
        if (props1.chair.chairCount == 2) {
        } else if (props1.chair.chairCount === 8) {
            notify.error("השתמשת בכל הכרטיסים")
        } else if (props1.chair.chairCount > 2) {
            notify.error("הכסא כבר תפוס")
        }
    }
    return (
        <div className="ChairCard">
            <React.Fragment>
                <section>
                    <div className="h-screen centered">
                        <button className="btn" onClick={() => buy()}
                        >click me</button>
                    </div>
                </section>
            </React.Fragment>
            <div className="card-content">
                <div className="image-container">
                    <img className="img" src={appConfig.moviesImagesUrl + props1.chair.imageName} />
                </div>
                <div className="card-title">
                    <h3>{props1.chair.chairNumber} :מספר כסא</h3>
                </div>
            </div>
        </div>
    );
}

export default ChairCard;