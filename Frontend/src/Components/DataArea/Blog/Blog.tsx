import moviesService from "../../../Services/movies-service";
import BlogModel from "../../../Models/blog-model";
import { useEffect, useState } from "react";
import notify from "../../../Utils/Notify";
import BlogCard from "../BlogCard/BlogCard";
import "./Blog.css";

function Blog(): JSX.Element {

    const[blog,setBlog] = useState<BlogModel[]>([]);

    useEffect(() =>{
        moviesService.getAllBlogs()
        .then(blog => setBlog(blog))
        .catch(err => notify.error(err))
    },[])

    return (
        <div className="Blog">
            {blog.map(b => <BlogCard key={b.blogId} blog={b}/>)}        
        </div>
    );
}

export default Blog;