import { UploadedFile } from "express-fileupload";

class BlogModel {
     blogId:number;
     story:string;
     title:string;
     name:string
     image:UploadedFile;
     imageName:string;
     video:string;

     constructor(blog:BlogModel){
        this.blogId = blog.blogId;
        this.story = blog.story;
        this.title = blog.title;
        this.name = blog.name;
        this.image = blog.image;
        this.imageName = blog.imageName;
        this.video = blog.video;
    }
}

export default BlogModel;