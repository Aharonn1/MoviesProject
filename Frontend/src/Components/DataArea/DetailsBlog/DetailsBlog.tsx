import moviesService from "../../../Services/movies-service";
import BlogModel from "../../../Models/blog-model";
import appConfig from "../../../Utils/AppConfig";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import notify from "../../../Utils/Notify";
import ReactPlayer from "react-player";
import "./DetailsBlog.css";

function DetailsBlog(): JSX.Element {

    const [blog, setBlog] = useState<BlogModel>();
    const params = useParams();

    useEffect(() => {
        moviesService.getOneBlog(+params.blogId)
            .then(blog => setBlog(blog))
            .catch(err => notify.error(err))
    }, [])

    return (
        <div className="DetailsBlog">
            {blog && <>
                <h3>{blog.name}</h3>
                <div className="poster">
                    <img className="img" src={appConfig.moviesImagesUrl + blog.imageName} />
                </div>
                <p>--------------------------------------------------------------------------</p>
                <p>{blog.story}facebook</p>
                <div className="movie">{<ReactPlayer controls url={blog.video} />}</div>                   
            </>}
        </div>
    );
}

export default DetailsBlog;