class AppConfig {
    public theatersUrl = "http://localhost:4000/api/theaters/";
    public genresUrl = "http://localhost:4000/api/genres/";
    public buyUrl = "http://localhost:4000/api/buy/";
    public blogUrl = "http://localhost:4000/api/blog/";
    public chairUrl = "http://localhost:4000/api/chair/";
    public moviesByTheaterUrl = "http://localhost:4000/api/movies-per-theaters/";
    public moviesByGenreUrl = "http://localhost:4000/api/movies-per-genres/";
    public moviesUrl = "http://localhost:4000/api/movies/";
    public moviesImagesUrl = "http://localhost:4000/api/movies/images/";
    public blogsImagesUrl = "http://localhost:4000/api/blog/images/";
    public moviesLikesUrl = "http://localhost:4000/api/movie/likes/";
    public registerUrl = "http://localhost:4000/api/auth/register/"; // Remember the ending /
    public loginUrl = "http://localhost:4000/api/auth/login/";
    public videoUrl = "https://youtu.be/eoOaKN4qCKw";
}

const appConfig = new AppConfig();

export default appConfig;
