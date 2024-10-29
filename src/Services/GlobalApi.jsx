import axios from "axios";

const Movie_Url = " https://api.themoviedb.org/3";
const API_KEY = "9a09e2f7d304d7e6ac058a6c34cd4730";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=9a09e2f7d304d7e6ac058a6c34cd4730';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa07
const getTreandingVIdeos = axios.get(Movie_Url+"/trending/all/day?api_key="+API_KEY);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)


export default {
    getTreandingVIdeos,
    getMovieByGenreId
}