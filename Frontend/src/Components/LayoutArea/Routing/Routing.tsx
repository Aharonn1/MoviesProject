import { Navigate, Route, Routes } from "react-router-dom";
import DataList from "../../DataArea/DataList/DataList";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import SearchMovie from "../../DataArea/SearchMovie/SearchMovie";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import WhatInTheater from "../../DataArea/WhatInTheater/WhatInTheater";
import DetailsCard from "../../DataArea/DetailsCard/DetailsCard";
import Blog from "../../DataArea/Blog/Blog";
import DetailsBlog from "../../DataArea/DetailsBlog/DetailsBlog";
import BuyMovie from "../../DataArea/BuyMovie/BuyMovie";
import CreditCardForm from "../../DataArea/CreditCardForm/CreditCardForm";
import Chairs from "../../DataArea/Chairs/Chairs";


function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/list" element={<DataList />} />
            <Route path="/search" element={<SearchMovie/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/whatInTheater" element={<WhatInTheater/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="DetailsCard/:movieId" element={<DetailsCard/>}/>
            <Route path="DetailsBlog/:blogId" element={<DetailsBlog/>}/>
            <Route path="/buyMovie" element={<BuyMovie/>}/>
            <Route path="/chairs" element={<Chairs/>}/>
            <Route path="/creditCardForm" element={<CreditCardForm/>}/>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Routing;
