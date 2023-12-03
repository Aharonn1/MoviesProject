import BlogModel from "../../../Models/blog-model";
import appConfig from "../../../Utils/AppConfig";
import { NavLink } from "react-router-dom";
import "./BlogCard.css";

interface PropsBlog {
    blog: BlogModel,
}

function BlogCard(props: PropsBlog): JSX.Element {

    return (
        <div className="BlogCard">
            <p>-------------------------------------------------------------------------------------------------</p>
            <NavLink to={"/DetailsBlog/" + props.blog.blogId}>
                <h3>{props.blog.name}</h3>
                <div className="poster">
                    <img className="img" src={appConfig.moviesImagesUrl + props.blog.imageName} />
                    <p>{props.blog.title}</p>
                </div>
            </NavLink>
        </div>
    );
}

export default BlogCard;
