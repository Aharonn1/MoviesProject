import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import imageHandler from "../2-utils/image-handler";

const router = express.Router(); // Capital R

router.get("/theaters", async(request:Request,response:Response,next:NextFunction)=>{
    try{
        const theaters = await dataService.getAllTheaters();
        response.json(theaters)
    }catch(err:any){
        next(err)
    }
})

router.get("/buy", async(request:Request,response:Response,next:NextFunction)=>{
    try{
        const buys = await dataService.getAllBuys();
        response.json(buys)
    }catch(err:any){
        next(err)
    }
})

router.get("/blog", async(request:Request,response:Response,next:NextFunction)=>{
    try{
        const blog = await dataService.getAllBlogs();
        response.json(blog)
    }catch(err:any){
        next(err)
    }
})

router.get("/genres", async(request:Request,response:Response,next:NextFunction)=>{
    try{
        const genres = await dataService.getAllGenres();
        response.json(genres)
    }catch(err:any){
        next(err)
    }
})

router.get("/movies", async(request:Request,response:Response,next:NextFunction)=>{
    try{
        const movies = await dataService.getAllMovies();
        response.json(movies)
    }catch(err:any){
        next(err)
    }
})

router.get("/chair", async(request:Request,response:Response,next:NextFunction)=>{
    try{
        const chairs = await dataService.getAllChairs();
        response.json(chairs)
    }catch(err:any){
        next(err)
    }
})

router.get("/movies-per-theaters/:theaterId", async(request:Request,response:Response,next:NextFunction)=>{
    try{
        const theaterId = +request.params.theaterId;
        const theatersId = await dataService.getMoviesByTheaterId(theaterId);
        response.json(theatersId)
    }catch(err:any){
        next(err)
    }
})

router.get("/movies-per-genres/:genreId", async(request:Request,response:Response,next:NextFunction)=>{
    try{
        const genreId = +request.params.genreId;
        const genresId = await dataService.getMoviesByTheaterGenre(genreId);
        response.json(genresId)
    }catch(err:any){
        next(err)
    }
})

router.get("/movies/images/:imageName", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const imageName = request.params.imageName;
        const absolutePath = imageHandler.getAbsolutePath(imageName)
        response.sendFile(absolutePath)
    } catch (err: any) {
        next(err)
    }
})

router.get("/movies/:movieId([0-9]+)", async (request: Request, response: Response, next: NextFunction)=>{
    try{
        const id = +request.params.movieId;
        const movie = await dataService.getOneMovie(id);
        response.json(movie)
    }catch(err:any){
        next(err)
    }
})

router.get("/blog/:blogId([0-9]+)", async (request: Request, response: Response, next: NextFunction)=>{
    try{
        const id = +request.params.blogId;
        const blog = await dataService.getOneBlog(id);
        response.json(blog)
    }catch(err:any){
        next(err)
    }
})

export default router;